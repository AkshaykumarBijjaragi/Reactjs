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

