import React from 'react'
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
   userInfo && <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-900 font-medium bg-slate-100'>
            {getInitials( userInfo.fullName)}
            </div>

            <div>
                <p className='text-sm font-medium'>{userInfo.fullName}</p>
                <button 
                className='text-sm text-slate-700 bg-primary rounded outline-indigo-950 text-center w-full text-white hover:bg-blue-800' 
                onClick={onLogout}>
                    Logout
                </button>
        </div>
    </div>
  );
};


export default ProfileInfo;