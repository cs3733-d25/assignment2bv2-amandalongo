export default function Form2() {
    return (
        <>
        <h3>Interested in Ballroom Dance?</h3>
            <p>
                If you are interested in learning how to ballroom dance, fill out this form to join the
                WPI Ballroom Dance Team email alias and answer a few information questions!
            </p>
            <form>
                <label htmlFor="fname">First Name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/><br/>

                <label htmlFor="lname">Last Name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/><br/>

                <label htmlFor="email">WPI Email:</label><br/>
                <input type="text" id="email" name="email"/><br/><br/>

                Which of these class times can you attend?<br/>
                <input type="checkbox" id="tues1" name="tues1" value="Tues1"/>
                <label htmlFor="tues1">Tuesday 8:45pm-9:45pm</label><br/>
                <input type="checkbox" id="tues2" name="tues2" value="Tues2"/>
                <label htmlFor="tues2">Tuesday 9:45pm-10:45pm</label><br/>
                <input type="checkbox" id="thurs1" name="thurs1" value="Thurs1"/>
                <label htmlFor="thurs1">Thursday 8:45pm-9:45pm</label><br/>
                <input type="checkbox" id="thurs2" name="thurs2" value="Thurs2"/>
                <label htmlFor="thurs2">Thursday 9:45pm-10:45pm</label><br/><br/>

                Do you have any ballroom experience?<br/>
                <input type="radio" id="adv" name="exp" value="Adv"/>
                <label htmlFor="adv">Yes, I am at an advanced level.</label><br/>
                <input type="radio" id="int" name="exp" value="Int"/>
                <label htmlFor="int">Yes, I am at an intermediate level.</label><br/>
                <input type="radio" id="beg" name="exp" value="Beg"/>
                <label htmlFor="beg">Yes, I am at a beginner level</label><br/>
                <input type="radio" id="no" name="exp" value="No"/>
                <label htmlFor="no">No</label><br/><br/>

                <label htmlFor="comments">Questions, Comments, Concerns, or Queries<br/></label>
                <textarea rows={4} cols={40} id="comments"></textarea><br/><br/>

                <label htmlFor="year">What year are you?</label><br/>
                <select id="year">
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="grad">Graduate Student</option>
                    <option value="alum">Alumni</option>
                    <option value="other">Other</option>
                </select><br/><br/>

                <input type="submit" value="Submit" id="submit"/>
            </form>
        </>
    );
}