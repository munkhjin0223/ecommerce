import { useState, useTransition } from 'react';
import SearchList from './List';

function Search() {
  const [isPending, startTransition] = useTransition();

  const [searchValue, setSearchValue] = useState('');
  const [delayedSearchValue, setDelayedSearchValue] = useState('');
  console.log('delayedSearchValue: ', delayedSearchValue);

  const onChangeSearchValue = (event) => {
    console.log('value: ', event.target.value);
    setSearchValue(event.target.value);

    startTransition(() => {
      setDelayedSearchValue(event.target.value);
    });
  };

  return (
    <>
      <div className='page-heading' id='top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='inner-content'>
                <h2>Check Our Products</h2>
                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='section' id='products'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-heading'>
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 pb-4'>
              <input className='form-control' value={searchValue} onChange={onChangeSearchValue} placeholder='Хайх' />
              {isPending && 'Searching...'}
            </div>
            <SearchList searchValue={delayedSearchValue} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;