import '../style';
import React from 'react';
import classNames from 'classnames';
import Icon from '@gag/icon';
class NavBar extends React.Component{
  render() {
    const {
      prefixCls, className, children, mode, iconName, leftContent, rightContent, onLeftClick,
      ...restProps,
    } = this.props;

    const wrapCls = classNames({
      [className]: className,
      [prefixCls]: true,
      [`${prefixCls}-${mode}`]: true,
    });

    return (
      <div {...restProps} className={wrapCls}>
        <div className={`${prefixCls}-left`} onClick={onLeftClick}>
          {iconName ? <span className={`${prefixCls}-left-icon`}><Icon type={iconName}/></span> : null}
          <span className={`${prefixCls}-left-content`}>{leftContent}</span>
        </div>
        <div className={`${prefixCls}-title`}>{children}</div>
        <div className={`${prefixCls}-right`}>
          {rightContent}
        </div>
      </div>
    );
  }
}


NavBar.defaultProps = {
  prefixCls: 'am-navbar',
  mode: 'dark',
  iconName: 'left',
  onLeftClick:function() {
  },
};
NavBar.propTypes = {
      prefixCls: React.PropTypes.string,
      className: React.PropTypes.string,
      children: React.PropTypes.any,
      mode:React.PropTypes.oneOf(['dark','light']),
      iconName:React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.bool
      ]),
      leftContent: React.PropTypes.any,
      rightContent: React.PropTypes.any,
      onLeftClick:React.PropTypes.func
};
NavBar.displayName = "NavBar";
module.exports=NavBar;
