import icons from './icon-data.js';

export function Icon({ name, size, ...rest }) {
  const d = icons[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox={d.viewBox}
      fill="none"
      dangerouslySetInnerHTML={{ __html: d.body }}
      {...rest}
    />
  );
}
export default Icon;
