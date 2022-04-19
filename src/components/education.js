const edu = [
    {
        key: 1,
        institution: 'University of Ibadan',
        course: 'Electrical and Electronic Engineering',
        start: '03/2015',
        end: '03/2020'
    },
    {
        key: 2,
        institution: 'Udacity',
        course:'Introduction to Programming Nanodegree',
        start:'10/2021',
        end:'01/2022',
    },
    {
        key: 3,
        institution: 'Udacity',
        course:'Front End Web Developer Nanodegree',
        start:'02/2022',
        end:'present'
    }
];

function EducationList(){
    return (
    <section>
    <h2 className="sub-head">Education</h2>
    <div className="education">{edu.map((school)=>{
        const {institution, course, start, end} = school;
        return <Education school={school}></Education>;
    })}
    </div>
    </section>
);
}

function Education(props){
    console.log(props);
    const {institution, course, start, end} = props.school;
    return (
        <div>
        <h2 className="course">{course}</h2>
        <h3 className="institution">{institution}</h3>
        <h4 className="date"><em>{start}-{end}</em></h4>
        </div>
    );
}

export default EducationList;