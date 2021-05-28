import React from 'react';
import PaperBtn, {Styles} from './styles';

const Button = ({
  children,
  iconBtn,
  secondary,
  tertiary,
  text,
  primary = true,
  contentStyle = {},
  labelStyle = {},
  ...props
}) => {
  return (
    <PaperBtn
      secondary={secondary ? secondary : null}
      tertiary={tertiary ? tertiary : null}
      text={text ? text : null}
      uppercase={false}
      primary={secondary || tertiary || text ? false : true}
      contentStyle={{width: '100%', height: 47, ...contentStyle}}
      iconBtn={iconBtn ? true : false}
      labelStyle={
        secondary || text
          ? {...Styles.txt, ...labelStyle}
          : {...Styles.txt, ...Styles.whiteTxt, ...labelStyle}
      }
      {...props}>
      {children}
    </PaperBtn>
  );
};

export default Button;
