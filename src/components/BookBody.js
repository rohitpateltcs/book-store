import React from "react";
import "./BookBody.css";
import ProductItem from "./ProductItem";
import Book from "./Book";

const BookBody = () => {
  return (
    <div className="all_product">
      <ProductItem
        img="\Images\java1.jpg"
        bookName="Java for beginner"
        price="Price $0.4"
        id="1"
      />
      <ProductItem
        img="\Images\java2.jpg"
        bookName="Java small course"
        price="Price $0.3"
      />
      <ProductItem
        img="\Images\java3.jpg"
        bookName="Advance java"
        price="Price $0.3"
      />
      <ProductItem
        img="\Images\java4.jpg"
        bookName="Web with Java"
        price="Price Free"
      />
      <ProductItem
        img="\Images\java5.jpg"
        bookName="New in Java"
        price="Price Free"
      />
      <ProductItem
        img="\Images\java6.jpg"
        bookName="Complete Java"
        price="Price $0.4"
      />
      <ProductItem
        img="\Images\java1.jpg"
        bookName="Java for beginner"
        price="Price $0.4"
      />
      <ProductItem
        img="\Images\java1.jpg"
        bookName="Java for beginner"
        price="Price $0.4"
      />
      <ProductItem
        img="\Images\java1.jpg"
        bookName="Java for beginner"
        price="Price $0.4"
      />
      <ProductItem
        img="\Images\java1.jpg"
        bookName="Java for beginner"
        price="Price $0.4"
      />
    </div>
  );
};

export default BookBody;
