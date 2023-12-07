import { getDatabase, ref, set, get } from 'firebase/database';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { CreateUserData } from '@/components/FormAuth/FormRegister';
import { ValidateUserData } from '@/components/FormAuth/FormLogin';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEP6wGg3mMxdQzZX7-lmcaHmi4qYLbvyQ",
  authDomain: "finance-master-d3163.firebaseapp.com",
  databaseURL: "https://finance-master-d3163-default-rtdb.firebaseio.com",
  projectId: "finance-master-d3163",
  storageBucket: "finance-master-d3163.appspot.com",
  messagingSenderId: "649973399948",
  appId: "1:649973399948:web:584f52e34a9ce3c7aad6a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export function createUser(data: CreateUserData) {
  const { name, document, email, password } = data

  const user = {
    name,
    document,
    email,
    password
  }

  const db = getDatabase()
  const newUser = ref(db, 'users/' + btoa(email))
  set(newUser, user)
}

export async function verification(data: ValidateUserData, type: string) {
  const { email, password } = data
  const db = getDatabase()
  const user = ref(db, 'users/' + btoa(email))

  const snapshot = await get(user)

  if (snapshot.exists()) {
    switch (type) {
      case 'login': {
        const userData = snapshot.val()
        if (password === userData.password && email === userData.email) {
          return userData
        } else {
          return false
        }
      }
      case 'register': {
        return true
      }
    }
  } else {
    return false
  }
}

export async function addTransation({ value, email, type }: { value: number, email: string, type: string }) {
  const data = {
    value,
    date: new Date().getTime,
    email,
    type
  }

  const db = getDatabase()
  const user = ref(db, 'users/' + btoa(email))

  const snapshot = await get(user)

  const newTransactions = ref(db, 'users/' + btoa(email) + '/transation')

  if (snapshot.val().transation) {
    set(newTransactions, [...snapshot.val().transactions, data])
  } else {
    set(newTransactions, data)
  }
}