# Icon libraries (from "Icones.fig")

Two families, both stored as `{ viewBox, body }` SVG data. Single-colour icons paint with
`currentColor`, so set `color` on the element.

| Library | Path | Count |
|---|---|---|
| Untitled UI Icons (2px stroke, `currentColor`) | `icons/untitled-ui/icon-data.js` | 1023 |
| Material Design | `icons/material/icon-data.js` | 3220 (1288 families x 5 styles) |

## Naming
- Untitled UI: PascalCase of the Figma layer name — `AlertCircle`, `Wifi`, `ClockSnooze`, `TouchApp`.
- Material: `<Family><Style>` — `SettingsStyleRounded`, `WifiStyleFilled`, `CheckCircleStyleOutlined`.
  Styles: `StyleFilled`, `StyleOutlined`, `StyleRounded`, `StyleSharp`, `StyleTwoTone`.

Full name lists: `Icon.d.ts` in each folder.

## Use in a Design Component
```html
<x-import component="Icon" from="./icons/untitled-ui/Icon.jsx"
          name="AlertCircle" size="{{ 24 }}" hint-size="24px,24px"></x-import>
```
Or read the data map directly and inline the `body` markup.

Browse and search everything in **Icon Library.dc.html**.
