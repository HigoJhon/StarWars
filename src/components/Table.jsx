import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a) => (
            <tr key={ a.name }>
              <td>{a.name}</td>
              <td>{a.rotation_period}</td>
              <td>{a.orbital_period}</td>
              <td>{a.diameter}</td>
              <td>{a.climate}</td>
              <td>{a.gravity}</td>
              <td>{a.terrain}</td>
              <td>{a.surface_water}</td>
              <td>{a.population}</td>
              <td>{a.films}</td>
              <td>{a.created}</td>
              <td>{a.edited}</td>
              <td>{a.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
