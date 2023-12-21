const SelectField = (props) => {
  const { label, handleChange, name } = props;
  return (
    <div className='mb-5'>
      <label className='text-gray-500 text-sm' htmlFor={name}>
        {label}
      </label>
      <select
        onChange={handleChange}
        defaultValue='Model'
        name={name}
        className='w-full border-b-2 py-2 outline-none'
      >
        <option value='Arena' disabled>
          ARENA
        </option>
        <option value='Alto K10' className='py-1'>
          Alto K10
        </option>
        <option value='Alto' className='py-1'>
          Alto
        </option>
        <option value='Swift' className='py-1'>
          Swift
        </option>
        <option value='Dzire' className='py-1'>
          Dzire
        </option>
        <option value='Celerio' className='py-1'>
          Celerio
        </option>
        <option value='Wagon R' className='py-1'>
          Wagon R
        </option>
        <option value='S-Presso' className='py-1'>
          S-Presso
        </option>
        <option value='Ertiga' className='py-1'>
          Ertiga
        </option>
        <option value='Brezza' className='py-1'>
          Brezza
        </option>
        <option value='Eeco' className='py-1'>
          Eeco
        </option>
        <option value='Nexa' disabled>
          Nexa
        </option>
        <option value='Ciaz' className='py-1'>
          Ciaz
        </option>
        <option value='XL6' className='py-1'>
          XL6
        </option>
        <option value='Baleno' className='py-1'>
          Baleno
        </option>
        <option value='Ignis' className='py-1'>
          Ignis
        </option>
        <option value='Grand Vitara' className='py-1'>
          Grand Vitara
        </option>
        <option value='S-CROSS' className='py-1'>
          S-Cross
        </option>
        <option value='Commercial' disabled>
          Commercial
        </option>
        <option value='Super Carry' className='py-1'>
          Super Carry
        </option>
        <option value='Eeco Cargo' className='py-1'>
          Eeco Cargo
        </option>
        <option value='Tour S' className='py-1'>
          Tour S
        </option>
        <option value='Tour H1' className='py-1'>
          Tour H1
        </option>
        <option value='Tour M' className='py-1'>
          Tour M
        </option>
        <option value='Tour H3' className='py-1'>
          Tour H3
        </option>
        <option value='Tour V' className='py-1'>
          Tour V
        </option>
      </select>
    </div>
  );
};

export default SelectField;
