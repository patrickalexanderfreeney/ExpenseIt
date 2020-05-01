import React, { useState } from 'react';

export default function AddTransaction() {
  const [text, useText] = useState('');
  const [amount, useAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-control'>
          <label Htmlfor='text'>Text</label>
          <input type='text' placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label Htmlfor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' placeholder='Enter amount...' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
}
