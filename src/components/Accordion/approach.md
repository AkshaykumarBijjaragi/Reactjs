## Approach for Creating Single Selection Accordion

### 1. Basic Layout of Accordion Structure:

- Create a structured layout for the accordion:
  - Container > Accordion > Accordion-Item
  - Accordion-Item should contain sections for title and answer.
  - The title section will include an `<h3>` tag for the question and a `<span>` tag for an icon.

### 2. Logic for Single Selection:

- Check if the data is not empty, and handle cases for empty data gracefully.
- Iterate over each object using `map`, ensuring to provide a unique `key` attribute for each item.
- Add an `onClick` event listener to the title div to capture the ID of the clicked item.
- Create a state variable to record the selected item, initialize it to `null` during declaration.
- In the event listener function, use the item's ID to set the state variable.
- Use a ternary operator to conditionally render the answer section only for the selected item.

### 3. Logic for Multi-Selection:

- Add a button to enable or disable multi-selection.
- Create a state variable (`multi`) to track whether multi-selection is enabled.
- Create a state variable (`multiItem`) to maintain an array of selected items.
- Modify the `onClick` event listener to either call `handleSingle` for single selection or `handleMulti` for multi-selection based on the `multi` state.
- In the `handleMulti` function, check if the item's ID is already in `multiItem`. If yes, remove it; if not, add it.
