import React from 'react'
import Home from '../Home/Home'
import SetIfscBranchDetail from '../../Components/HomeIFSCDetailComponents/SetIfscBranchDetail'
import { useSelector } from 'react-redux';

function BranchDetailRoute() {
  const { bank: { bankname }, state: { statename }, district: { districtname } } = useSelector((state) => state.ifscSearchDetailInfo);

  return (
    <>
      <Home IFSCDetailTakerComponent={SetIfscBranchDetail} />
      <div className="pageContainer">
        <div className="descriptionSectionContainer">
          <div className="descriptionContainer">
            <h1 className='descriptionHeading'><span>{bankname}</span> IFSC Code in <span>{districtname}</span></h1>
            <p className='description'><span>{bankname}</span> IFSC code in <span>{districtname}</span> in <span>{statename}</span> state is used in internet banking for transferring funds between any two bank branches. These IFSC codes for <span>{bankname}</span> <span>{districtname}</span> are used to identify the branches participating in online transactions via RTGS, NEFT and IMPS systems. Therefore, each branch of <span>{bankname}</span> in <span>{districtname}</span> supporting net banking has its unique IFSC code. Industrial Credit And Investment Corporation Of India IFSC code list in <span>{districtname}</span> is provided by RBI. NOTE that all branches of a bank cannot provide online fund transfer systems, only those approved by RBI can provide such facility.</p>
          </div>
          <div className="descriptionContainer">
            <h1 className='descriptionHeading'>How to Find <span>{bankname}</span> IFSC Code in <span>{districtname}</span> ?</h1>
            <p className='description'><span>{bankname}</span>, <span>{statename}</span>, <span>{districtname}</span> IFSC codes are given in the table alongside. Details like address and contact numbers of branches of <span>{bankname}</span> with IFSC code in <span>{districtname}</span> are also provided. Simplify your search either by selecting any particular city from the drop down list or by selecting the link for city in the table on the right side. You can find IFSC codes for all Industrial Credit And Investment Corporation Of India <span>{districtname}</span> branches here.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BranchDetailRoute
