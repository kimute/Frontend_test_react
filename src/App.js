import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./App.css";
import Mail from "./Mail";

//mail:apiから取得したdic
//messages:api中のメールメッセージ
class App extends React.Component {
  state = {
    isLoading: true,
    mail: [],
    messages: [],
    id: "",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ id: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getSearchMail();
  };

  //APIをgetする処理
  getSearchMail = async () => {
    const id = "123456";
    const search = this.state.id;
    console.log("search", this.setState.id);
    //const search ="this.state.value";

    try {
      if (search === "") {
        this.setState({ mail: [], isLoading: false });
      } else {
        const id = this.state.id;
        const token = await axios.get(
          `https://coding-assignment-v1.now.sh/api/v1/inbox/${id}`
        );
        //tokenをdecodeする処理
        const messages = jwt_decode(token.data.payload);
        //メールメッセージをget
        const contents = messages["messages"];
        this.setState({ mail: messages, isLoading: false, messages: contents });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getSearchMail();
  }

  render() {
    const { isLoading, mail, messages } = this.state;

    console.log(mail);

    console.log(messages);

    return (
      <div>
        {isLoading ? (
          "Loading..."
        ) : (
          <form className="search" onSubmit={this.handleSubmit}>
            <h1>Search</h1>
            <input
              className="keyword"
              type="text"
              value={this.state.id}
              onChange={this.handleChange}
              placeholder="Search Email.."
            />
            <h5>inboxAlias:{mail.inboxAlias}</h5>
            <h5>inboxId:{mail.inboxId}</h5>

            <div className="mails">
              {Object.keys(messages).map((inkey) => (
                <Mail
                  key={mail.inboxId}
                  messageSubject={messages[inkey].messageSubject}
                  messageSender={messages[inkey].messageSender}
                  messageAt={messages[inkey].messageAt}
                  messagePriority={messages[inkey].messagePriority}
                  messageContent={messages[inkey].messageContent}
                />
              ))}
            </div>
          </form>
        )}
      </div>
    );
  }
}
export default App;
