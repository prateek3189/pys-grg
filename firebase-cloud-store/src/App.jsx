import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { app } from "./firebase";
import "./App.css";

const firestore = getFirestore(app);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      Name: "Delhi",
      lat: 123,
      long: 3456,
      pin: 12345,
    });
  };

  const writeSubDocument = async () => {
    const result = await addDoc(
      collection(firestore, "cities/nILu0gPzQLhtMTcqM2qb/places"),
      {
        Name: "Sector 1",
        description: "This is a place in Sector 1",
      }
    );
  };

  const getDocument = async () => {
    const docRef = doc(firestore, "cities", "nILu0gPzQLhtMTcqM2qb");
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      console.log("Document data:", snap.data());
    } else {
      console.log("No such document!");
    }
  };

  const getDocumentByQuery = async () => {
    const collectionRef = collection(firestore, "users");
    const q = query(collectionRef, where("isMale", "==", true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  };

  const updateDocument = async () => {
    const docRef = doc(firestore, "cities", "nILu0gPzQLhtMTcqM2qb");
    await updateDoc(docRef, {
      Name: "New Delhi",
    });
  };

  return (
    <div className="App">
      <h1>Firebase Fire Store</h1>
      <button onClick={writeData}>Add Data</button>
      <br />
      <button onClick={writeSubDocument}>Add Palces</button>
      <br />
      <button onClick={getDocument}>Get Document</button>
      <br />
      <button onClick={getDocumentByQuery}>Get Document By Query</button>
      <br />
      <button onClick={updateDocument}>Update</button>
    </div>
  );
}

export default App;
