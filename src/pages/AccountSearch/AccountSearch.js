import React from "react";
import { useRef } from "react";
import "./accountsearch.css";

// define a variable for account name
// let accountName;
// // need a handle for .find-account-button
// let findAccountBtn = document.querySelector(".find-account-button");
// // Create function to query the api for an account
// function getAccount() {
//   let poeApiUrl = `https://api.pathofexile.com`;
//   fetch(poeApiUrl)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

const AccountSearch = () => {
  const accountRef = useRef();
  // TODO: capture account name and plug it into string for the fetch url
  let poeFetchUrl = "https://www.pathofexile.com/character-window/get-characters?accountName=Emericas21";
  const getAccount = (event) => {
    event.preventDefault();
    console.log({
      account: accountRef.current.value,
    });
    // this is where I will want to fetch the data
    fetch(poeFetchUrl).then((response) => {
      return response.json();
    }).then((data)=>{
      console.log(data)
    });
  };

  return (
    <>
      <div className="flex items-center justify-center mt-3">
        <h2 style={{ color: "white" }}>Search For Your Account</h2>
      </div>
      <div className="container mx-auto">
        <div className="home-control-style mt-3 grid grid-cols-1">
          <div className="flex items-center justify-center">
            <p className="">
              Enter your account name below to bring up a list of your
              characters. Note: Please make sure that your account is public
              inside your{" "}
              <a
                href="https://www.pathofexile.com/my-account"
                target="_blank"
                rel="noreferrer"
                className="text-red-400 hover:text-red-600"
              >
                Path of Exile Account
              </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm-grid-cols-4 mt-3 ">
          <form onSubmit={getAccount}>
            <div className="flex items-center justify-center">
              <input
                type="text"
                className="find-account-input w-1/3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={accountRef}
              ></input>
            </div>
            <div className="flex items-center justify-center">
              <button className="find-account-button w-1/3 mt-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Find Your Account
              </button>
            </div>
          </form>
        </div>
        {/* <div className="flex items-center justify-center mt-3">
    <div className="grid grid-cols-3 gap-4">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  </div> */}
      </div>
    </>
  );
};

export default AccountSearch;
