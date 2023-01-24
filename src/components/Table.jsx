import { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const [filtered, setFilter] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [imputValue, setValue] = useState(0);
  const [saveFilter, setSave] = useState([]);

  let planets = data;

  if (saveFilter.length) {
    planets = saveFilter.reduce((acc, curr) => {
      const { comparison: compa, column: colu, imputValue: valu } = curr;
      if (compa === 'maior que') {
        return acc.filter((a) => +a[colu] > valu);
      } if (compa === 'menor que') {
        return acc.filter((a) => +a[colu] < valu);
      }
      return acc.filter((a) => +a[colu] === +valu);
    }, planets);
  }
  const search = saveFilter.map((a) => a);
  console.log(search);
  const handleSearch = planets.filter((a) => a.name.includes(filtered));

  return (
    <div>
      <h1>STARWARS</h1>
      <label htmlFor="name-filter">
        <input
          type="text"
          data-testid="name-filter"
          value={ filtered }
          onChange={ (a) => setFilter(a.target.value) }
        />
      </label>
      <div>
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target: { value } }) => setComparison(value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ imputValue }
          onChange={ ({ target: { value } }) => setValue(value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => setSave([...saveFilter, { comparison, imputValue, column }]) }
        >
          Filtrar
        </button>
        <br />
        <ul>
          {
            saveFilter.map((a, index) => {
              const { comparison: compa, column: colu, imputValue: valu } = a;
              const imp = `${compa} ${colu} ${valu}`;
              return (
                <li key={ index }>{imp}</li>
              );
            })
          }
        </ul>
      </div>
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
          {handleSearch.map((a) => (
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
