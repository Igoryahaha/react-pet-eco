import React from 'react'
import {connect} from 'react-redux'
import ToolsPanel from './ToolsPanel.js'
import getWorld from '../../actions/server/getWorld'
import setWorld from '../../actions/server/setWorld'
import newWorld from '../../actions/server/newWorld'


class ToolsPanelContainer extends React.Component {
    render() {
        const {newWorld, setWorld, getWorld, world} = this.props
        return (
            <ToolsPanel
                name={world.user}
                events={world.events}
                map={world.map}
                setWorld={setWorld}
                getWorld={getWorld}
                newWorld={newWorld}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        world: store.world.world,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWorld: name => dispatch(getWorld(name)),
        setWorld: (name, map, events) => dispatch(setWorld(name, map, events)),
        newWorld: name => dispatch(newWorld(name)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolsPanelContainer)