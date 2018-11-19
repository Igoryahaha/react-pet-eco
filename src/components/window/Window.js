import React from "react";


class Window extends React.PureComponent {
  renderTemplate = () => {
    const {map} = this.props
    let arr = [];
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        let type = "";
        const place = map[y][x] + "";
        switch (place) {
          case "0,0,0":
            break;
          case "1,0,0":
            type = " block";
            break;
          case "0,1,0":
            type = " eat";
            break;
          case [0, 0, 1]:
            type = " water";
            break;
          default:
            break;
        }
        arr.push(type);
      }
    }
    let i = 0;
    return arr.map(entry => (
      <div id={i} key={i++} className={entry}>
      </div>
    )
    )
  }

  render() {

    return (
      <div className="window">
        {this.renderTemplate()}
      </div>
    )
  }
}

export default Window;