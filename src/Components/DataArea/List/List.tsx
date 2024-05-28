import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
// import { CategoryModel } from "../../../Models/CategoryModel";
import { dataService } from "../../../Services/DataService";
import { notify } from "../../../Utils/Notify";

import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import { useNavigate } from "react-router-dom";

function List(): JSX.Element {
  const navigate = useNavigate();
  const auth = useSelector<AppState>((AppState) => AppState.auth);

  useEffect(() => {
    // Retrieve auth status from localStorage
    const storedAuth = localStorage.getItem("blueGrapes");
    if (!auth && storedAuth !== "true") {
      navigate("the-grapevine");
    }
  }, []);

  //   const [categories, setCategories] = useState<CategoryModel[]>([]);
  //   const [gifts, setGifts] = useState<GiftModel[]>([]);

  //   async function showGifts(args: ChangeEvent<HTMLSelectElement>) {
  //     const categoryId = args.target.value;
  //     dataService
  //       .getGiftsByCategory(categoryNameTo_id(categoryId))
  //       .then((dbGifts) => setGifts(dbGifts))
  //       .catch((err) => notify.error(err));
  //   }

  //   async function deleteMe(id: number) {
  //     alert("ID to delete: " + id);
  //   //   }
  //   console.log(categories);

  //   function categoryNameTo_id(name: string): string {
  //     const category = categories.find((c) => c.name === name);
  //     console.log(category?._id);
  //     return category?._id;
  //   }

  return (
    <div className="List">
      {/* <label>Select Target Audience: </label>
      <select defaultValue="" onChange={showGifts}>
        <option disabled value="">
          Select...
        </option>
        {categories.map((c) => (
          <option key={c._id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {gifts.map((g) => (
            <tr key={g._id}>
              <td>{g.name}</td>
              <td>{g.description}</td>
              <td>{g.price}</td>
              <td>{g.discount}</td>
              {/* <td>
                <button onClick={() => deleteMe(g.id)}>❌</button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default List;
