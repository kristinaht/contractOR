import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TermDetail(props) {

  const termStyle = {
    textAlign: 'justify',
    border: '5px solid',
    border: '#10343d',
    width: '90%',
    padding: '2%',
    margin: '1%',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.30)',
    color: '#929296',
    fontSize: '2rem',
  }


  const { term, onClickingDelete, onClickingEdit } = props;

  
  return(
    <React.Fragment>
      <Link to="/">Home</Link>
      <Card style={termStyle}>
        <h1>Document Detail</h1>
        <h2>{ term.name } </h2>
        <p>This Professional Services Contract ("Contract") is between MyCompany, Inc, an Oregon corporation located at 3434 NW Some Address, Portland, OR 97209("Company") and {term.contractor} ("Contractor"). The parties agree as follows:</p>
        <h3>Section A: Fees and Term</h3>
        <p>Company shall pay Contractor a sum not to exceed ${term.fee}, which includes all travel. administrative and other expenxes. Company shall pay Contractor in accordance with Section G.2, below.</p>
        <p>The Contract takes effect on {term.startDate}, and unless terminated earlier as provided below, continues through {term.endDate} ("Term").</p>
        <h3>Section B: Scope of Work</h3>
        <p>{ term.sow }</p>
        <h3>Section C: Terms and Conditions</h3>
        <h4>1. Services</h4>
        <p>1.1 Contractor shall perform the services set out in the Statement of Work above (the “Services”) in accordance with the
        terms and conditions of this Contract and in a professional and workmanlike manner, in accordance with generally recognized industry
        standards for similar services;</p>
        <p>1.2 This Contract does not create an employer/employee relationship between the parties. It is the parties’ intention that
        Contractor will be an independent contractor and not an employee of Company for any purpose. Contractor shall be responsible for
        compliance with all federal, state and local laws, ordinances, regulations and orders that are applicable to this Contract and
        Contractor’s performance hereunder ( « Applicable Laws ») related to its employees and agents. Contractor will retain sole and
        absolute discretion over the manner and means of carrying out Contractor’s activities and responsibilities hereunder. </p>
      
        <h4>3. Responsibility for Damages; Indemnity</h4>
        <p>{term.indemnity}</p>
        <h4>4. Payment</h4>
        <p>Unless otherwise expressly provided for in this Contract, payment shall be made after completion of Services. Contractor shall submit invoices to the Department. Company payment terms are net {term.paymentDays} from the date of invoice. Contractor may not charge
        Company interest on an overdue payment.</p>
        <h4>4. Insurance</h4>
        <p>4.1 Contractor shall maintain in force during the Term and at its own expense each of the insurances listed below:</p>
        <ul>
          <li>Commercial General Liability insurance with a minimum limit of at least ${term.glMin}/occurrence and ${term.glMax}
          annual aggregate for Bodily Injury and Property Damage, and including contractual liability coverage for the
          indemnity provided under this Contract.</li>
          <li>Professional Liability insurance with a combined single limit of at least ${term.plMin}/occurrence and ${term.plMax} annual
          aggregate for damages caused by error, omission, or negligent acts related to any professional services provided under
          this Contract.</li>
        </ul>
        <h4>4. Governing Law/Venue</h4>
        <p>All matters arising out of or relating to this Contract shall be governed by and construed in accordance with the internal laws of the State of {term.govLaw} without giving effect to any choice or conflict of law provision or rule (whether of the State of {term.govLaw} or any other jurisdiction).</p>
        <h4>5. Entire Agreement</h4>
        <p>This Contract constitutes the entire agreement between the parties with respect to the subject matter herein
        and all prior or contemporaneous oral or written communications, understandings, or agreements between Contractor and OHSU
        with respect to this subject matter are hereby superseded in their entirety. The parties agree that neither party shall be accorded
        any advantage over the other by reason of being the drafter of any of the language of this Contract.</p>
        <p>This Contract takes effect only when signed by the authorized representatives of both OHSU and Contractor indicating their
        agreement with the above Services and terms and conditions.</p>
        
          <h2>COMPANY: MyCompany.Inc</h2>
          <p>______________________________<br/>Authorized Signature & Date</p>
        
    
          <h2>COMPANY: {term.contractor}</h2>
          <p>______________________________<br/>Authorized Signature & Date</p>
    
        
        <Button onClick={ () => onClickingDelete(term.id) }>Delete </Button>
        <Button onClick={ onClickingEdit }>Edit </Button>
        <Button>Export</Button>
        {/* <Button onClick={myDocument}>Export</Button> */}
      </Card>
    </React.Fragment>
  )
}

TermDetail.propTypes = {
  term: PropTypes.object,
  onClickingDelete: PropTypes.func
}

// ReactPDF.render(<TermDetail />);
  export default TermDetail;

  // const styles = StyleSheet.create({
  //   page: {
  //     flexDirection: 'row',
  //     backgroundColor: '#E4E4E4'
  //   },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //     flexGrow: 1
  //   }
  //   });
    
    
    
  //   const myDocument = (term) => (
  //   <Document>
  //     <Page size="A4" style={styles.page}>
  //       <View style={styles.section}>
  //         {term}
  //       </View>
  //       <View style={styles.section}>
  //         <Text>Section #2</Text>
  //       </View>
  //     </Page>
  //   </Document>
  //   );
  