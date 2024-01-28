# Random Color Generator

## Approach

### 1. Basic Layout of Color Generator:

- Create a structured layout for the color generator:
  - Container > Color Generator Buttons > Color Display
  - Color Generator Buttons will include buttons for generating Hex and RGB colors.
  - Color Display will show the generated color.

### 2. Logic for Generating Colors:

- Use state variables to track the selected color format and the generated color.
- Implement functions to generate random Hex and RGB colors.
- Display the generated color in the Color Display section.

### 3. Logic for Copying Color to Clipboard:

- Add a button to copy the generated color to the clipboard.
- Utilize the Clipboard API to write the color to the clipboard.
- Provide user feedback through an alert on successful copy.

