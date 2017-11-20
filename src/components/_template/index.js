import React, { PureComponent } from 'react'
import cn from 'classnames'
import { withStyles } from 'front-core/src/styles'

const styles = () => ({
  root: {
  },
})

class Template extends PureComponent {
  render() {
    const { classes, value } = this.props
    return (
      <div className={cn(classes.root)}>
        Template of base component with value: { value }
      </div>
    )
  }
}

export default withStyles(styles)(Template)
