import "./MembershipStyles.css";

function MembershipForm() {
  return (
    <div className="from-container">
      <h1>MemberShip Form</h1>
      <form>
        <input placeholder="First-Name" />
        <input placeholder="Midle-Name" />
        <input placeholder="Last-Name" />
        <input placeholder="sex" />
        <input placeholder="Date-of-Birth(E.C)" />
        <input placeholder="Nationality" />
        <input placeholder="Educational-level(BSC/MSC,MPH,PHD)" />
        <input placeholder="Field of Study (HO/Lab/Nurse/Medicine/Env.h/Pharm/Dent/Radiology/Others specify)" />
        <input placeholder="Current job " />
        <input placeholder="Employer" />
        <input placeholder="City /Region" />
        <input placeholder="P.o.Box" />
        <input placeholder="Email" />
        <input placeholder="Phone" />
        <input placeholder="Fax" />
      </form>
      <h3> Membership Status and annual fee:</h3>
      <ul>
        <li>
          {" "}
          Regular Members Birr 300.00 Health officers who pay membership fee
          annually{" "}
        </li>
        <li>
          {" "}
          Life member Birr 1000.00 Health officers who pay membership fee only
          once{" "}
        </li>
        <li>
          {" "}
          Affiliate Member Birr200.00 Individual who is not eligible for regular
          membership
        </li>
        <li>
          {" "}
          National Ins/Org Birr 2000.00 Inst/Org in Ethiopia that espouses the
          mission and Objectives of PHOA annually.
        </li>
        <li>
          {" "}
          International Inst/Org £ 500.00 Inst/ Org outside Ethiopia espouse the
          mission and Objectives of PHOA-E.{" "}
        </li>
        <li>
          {" "}
          Membership outside Ethiopia £ 50 Health officer outside Ethiopia pays
          membership fee annually.{" "}
        </li>
        <li>
          {" "}
          Student member Birr 100.00 Student studying Health officer pays
          membership annually.
        </li>
        <li>
          {" "}
          Honorary member No Fee Retired regular or affiliate member with 10
          years.
        </li>
        <li>
          {" "}
          Membership in PHOA, who was a member in good standing at the time of
          retirement
        </li>
      </ul>
    </div>
  );
}

export default MembershipForm;
