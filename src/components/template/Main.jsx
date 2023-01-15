/* eslint-disable import/no-anonymous-default-export */
import Header from "./Header";
import "./Main.css";

export default (props) => (
  <>
    <Header {...props} />
    <main className="content container-fluid">
      <div className="p-3 mt-3">
        {props.children}
      </div>
      </main>
  </>
);
