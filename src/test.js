import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('xKT5ZLjj2meuTYXrUSyg')
  .collection('cartItems')
  .doc('IEC81jxdV3hQHfh9zjQk');

firestore.doc('/users/xKT5ZLjj2meuTYXrUSyg/cartItems/IEC81jxdV3hQHfh9zjQk');
firestore.collection('/users/xKT5ZLjj2meuTYXrUSyg/cartItems');
