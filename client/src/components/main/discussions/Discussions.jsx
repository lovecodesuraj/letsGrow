import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchDiscussions } from '../../../actions/discussion';


const Discussions = () => {
    const dispatch=useDispatch();
    const {discussions}=useSelector(state=>state.discussions);

    useEffect(()=>{
      dispatch(fetchDiscussions());
    }
    ,[dispatch])
  return (
    <div>{discussions.length} discussions now</div>
  )
}

export default Discussions