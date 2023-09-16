# Features of the project

- In this project an user can complete online course registration by take different types of course by clicking select button.

- An user can take a same course only one time, if an user try to want take a course more than one time, user will show a warning alert and can't take same course more than one time.


- An user can take maximum 20 credit if user want to take more than 20 credit user will show alert message that "user can not take more than 20 credit".


# Discussion about the management of the state in the project

In the project, I have used 4 `useState` hook to declare and manage state within a functional component.
- In Courses.jsx component `courses` hook used for load courses data by using useEffect functionality and then set the data.

- In App.jsx component there are 3 `useState` hook used. First hook used for added credits. For added credits i used here `handleSelectedCourse` functionality and passed `credits` props to the Credits.jxs component also in Credits.jxs component map credits and import credit from Credit.jsx component. at last setCredits.

- In App.jsx component rest 2 `remaining` and `totalCredit` used for setRemaining and setTotalCredit by using same functionality. then the `remaining` and `totalCredit` props passed to Credits.jsx component and then setRemaining and setTotalCredit.