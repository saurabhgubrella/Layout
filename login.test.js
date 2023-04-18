// import React from 'react';
// import Note from "./note";
// import {render,fireEvent, act} from "@testing-library/react"

// describe("Note",()=>{
//     describe('with valid inputs', () => {
//     it("Calls the onsubmit function", async()=>{
//         const mockOnSubmit = jest.fn()
//         const {getByLabelText,getByRole}=renders(<Note onSubmit={mockOnSubmit}/>)
        
//     await act(async()=>{ 
//       fireEvent.change(getByLabelText("Name *"),{target:{value:"Saurabh"}})
//       fireEvent.change(getByLabelText("Password *"),{target:{value:"1234567"}})
//     })
//     await act(async()=>{
//      fireEvent.click(getByRole("button"))
//     })
//     expect(mockOnSubmit).toHaveBeenCalled() 
    
//     })
//      })

//      describe('with invalid name', () => {
//         it("renders the email validation error",async()=>{
//             const {getByLabelText,container} = render(<Note/>)
//             await act(async ()=>{
//             const nameInput = getByLabelText("Name *") 
//             fireEvent.change(nameInput,{target:{value:"invalid name"}})    
//         })
//         expect(container.innerHTML).toMatch("Enter a valid name")
//         })
//      })

//      describe('with invalid password', () => {
//         it.todo("renders the password validation error")
//      })
// })