import axios from "axios";
import { useEffect, useState } from "react";

function BlueprintList() {

  const [blueprintsData, setBlueprintsData] = useState([]);

  const fetchData = async () => {
    const base_api_url = process.env.REACT_APP_BASE_API_URL
    const list_blueprints_url = `${base_api_url}/blueprints`
    try {
      const response = await axios.get(list_blueprints_url);
      console.log("received blueprints list", response.data)
      setBlueprintsData(response.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData().catch(err => console.log(err));
  }, [])

  const blueprints = blueprintsData.map(
    (blueprint) => {
      return (
        <li key={blueprint.id} className="BlueprintListElement">
          <div>
            <img className="blueprintImage" src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2016/11/17/427681/132021/spaceship_fighter_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1565530_o.jpg"></img>
            {blueprint.name}
            <br />
            {blueprint.Price}
            <br />
            {blueprint.souls}
          </div>
        </li>
      )
    }
  )

  return (
    <div className="BlueprintList">
      <ul className="BlueprintListContainer">
        {blueprints}
      </ul>
    </div>
  );
}

export default BlueprintList;