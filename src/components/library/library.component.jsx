import { useState } from "react";
import { data } from "../../data";

import "./library.styles.css";

const Library = () => {
  const [items, setItems] = useState(data);

  const filterMenu = (category) => {
    const updateItems = data.filter((currentItems) => {
      return currentItems.category === category;
    });

    setItems(updateItems);
  };

  return (
    <>
      <section className="eBook_section">
        <h1
          className="mt-5 text-center"
          style={{
            marginTop: "4rem",
          }}
        >
          Read any Book!
        </h1>

        {/* <div
          className="menu-tabs container"
          style={{
            marginTop: "2rem",
            marginBottom: "0px",
          }}
        >
          <button
            className="btn btn-outline-dark eBook_button"
            onClick={() => filterMenu("Computer_Science")}
          >
            Computer Science
          </button>
          <button
            className="btn btn-outline-dark eBook_button"
            onClick={() => filterMenu("Social_Science")}
          >
            Social Science
          </button>
          <button
            className="btn btn-outline-dark eBook_button"
            onClick={() => filterMenu("Accounts")}
          >
            Accounts
          </button>
          <button
            className="btn btn-outline-dark eBook_button"
            onClick={() => filterMenu("Biology")}
          >
            Biology
          </button>
          <button
            className="btn btn-outline-dark eBook_button"
            onClick={() => filterMenu("Psychology")}
          >
            Psychology
          </button>
        </div> */}
        <div class="section">
          <div class="container">
            <div class="grid-row">
              <div class="grid-item">
                <span>
                  <button
                    className="eBook_button"
                    onClick={() => filterMenu("Computer_Science")}
                  >
                    Computer Science
                  </button>
                </span>
              </div>
              <div class="grid-item">
                <span>
                  <button
                    className="eBook_button"
                    onClick={() => filterMenu("Social_Science")}
                  >
                    Social Science
                  </button>
                </span>
              </div>
              <div class="grid-item">
                <span>
                  <button
                    className="eBook_button"
                    onClick={() => filterMenu("Psychology")}
                  >
                    Psychology
                  </button>
                </span>{" "}
              </div>
              <div class="grid-item">
                <span>
                  <button
                    className="eBook_button"
                    onClick={() => filterMenu("Biology")}
                  >
                    Biology
                  </button>
                </span>{" "}
              </div>
              <div class="grid-item">
                <span>
                  <button
                    className="eBook_button"
                    onClick={() => filterMenu("Accounts")}
                  >
                    Accounts
                  </button>
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="menu-items container-fluid mt-5">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row my-5">
                {items.map((elem) => {
                  const { id, name, image, review } = elem;
                  return (
                    <div className="grid-item" key={id}>
                      <span>
                        <h3>{name}</h3>
                        <p>Review: {review}</p>
                      </span>{" "}
                      <img src={image} height="200px" width="200px" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Library;
