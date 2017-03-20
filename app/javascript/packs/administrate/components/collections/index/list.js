import React from 'react';
import {Link} from 'react-router';
import Collection from './collection';
export default (props) => {
  const collections = props.store.getIn(['collections', 'collections'])
  const {destroyCollection, fetchCollections} = props.actions;
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to='/administrate/collections/new'
          className="button button-large">
          Новый Набор
        </Link>
      </div>
      <h3>Наборы</h3>
      <div className="clearfix"></div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>изобр.</th>
            <th>действия</th>
          </tr>
        </thead>
        <tbody>
          { !collections.isEmpty() && collections.map((collection)=>{
            const key = collection.get('id');
            let destroy = () => destroyCollection(key).then(() => fetchCollections());
            return <Collection {...{key, collection, destroy}} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}
