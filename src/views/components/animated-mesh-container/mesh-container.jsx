import { Space } from 'antd'
import './mesh-container.scss'
import PropTypes from 'prop-types'

const AnimatedMeshContainer = ({ children }) => {
  return (
    <div className="animate-container">
      <div className="blob">
      </div>
      <div className="children-container">{children}</div>
    </div>
  )
}

AnimatedMeshContainer.propType = {
  children: PropTypes.element
}

export default AnimatedMeshContainer
