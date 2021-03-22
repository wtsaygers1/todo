Parent

class App extends React.Component {
    constructor() {
        <!-- is the super needed if it is the parent?? -->
        super()
        <!-- the tasks will be stateful because task will be added and deleted -->
        this.list = [];

        this.state = {
            <!-- the default state which will initialize as the input form with no task -->
            <!-- what will happen when a user puts in a task, leaves page, and then comes back, what would be default, probably something with local storage -->
        }

        this.setState({})
        <!-- understand JSON here and how this may be a conditional if the state has anything in local storage??? -->

        componentDidMount or compenentDidUpdate ???
        I'm thinking componentDidUpdate but need to understand JSON here as well and the local storage
    }
}

render() {
    return (
        will I need container, row, column???
        <div className="Header">
            <Header />
        </div>
        <div className="Input">
            <Input Form />
        </div>
        <div className="Task">
            <Tasks />
        </div>
        <div className="btm-btns">
        <!-- all these will need a d-inline display -->
            <p>counter</p>
            <button class="btn" type="button" id="all">All</button>
            <button class="btn" type="button" id="active">Active</button>
            <button class="btn" type="button" id="complete">Completed</button>
            <!-- this last button will need to be hidden until a task has been checkmarked -->
            <button class="btn" type="button" id="clearcom">Clear Completed</button> 


    )
}

<------------------------------------------------------------------------------------------------------------>
<!-- each task needs to know when it was created, if its been checkmarked, if its been x'd -->
class Task extends React.Component {
    constructor() {
        super()
        <!-- this will create a time stamp for the task which would double as a unique id -->
        <!-- probably will want it to know its index in the tasks array as well -->
        this.state. = {
            this.id = id,
            date: new Date(),
            this.checked: false,
            this.xD: false
            <!-- Do I need something for the HTML this.HTML="" -->
        }
    }
}

this.list.push(task)

<!-- a function to render the list -->
function InfiniteList(props) {
    for (let i = 0; i < array.length; i++) {
        
    }

}

componentDidMount() {
    <!-- what would go in here??? -->
}

render() {
    return (
        <!-- dynamic rendering of the tasks -->
        <!-- rendering an unordered list -->
        <!-- could theoretically be infinite list -->
        <!--  -->
    )
}