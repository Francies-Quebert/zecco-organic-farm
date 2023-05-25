import React from 'react';

function Logo() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative bg-[#4EC6A6] rounded-full w-[50px] h-[50px] ">
        {/* <div
                className="bg-white rounded-full absolute top-2 left-3"
                style={{
                    height: '41px',
                    maxWidth: '32px',
                    background: 'radial-gradient(circle at 50% 35%, white 60%, transparent 60%)',
                    transform: '',
                }}
            /> */}
      </div>
      <div className="pl-2 font-KronaOne ">
        <div className="font-medium text-2xl">ZECCO</div>
        <div className="text-xs">Organic Farm</div>
      </div>
    </div>
  );
}

export default Logo;
