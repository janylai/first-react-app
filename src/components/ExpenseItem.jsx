import './ExpenseItem.css'
import Expense from './espenses/Expense'
import ExpenseItems from './espenses/ExpenseItems'
import ExpenseItemm from './espenses/ExpenseItemm'

function ExpenseItem() {
    return(
       <div className='extense-id'>
           {/* <header>
              <ul className='list-style'>
                 <li>Put on this page information about your product</li>
                 <li>A detailed description of your product</li>
                 <li>Tell us about the advantages and merits</li>
                 <li>Associate the page with the payment system</li>
              </ul>
           </header>

           <main className='btn'>
               <div>
                  <img src="https://ptzgovorit.ru/sites/default/files/styles/700x400/public/original_nodes/14525287089960_0.jpg?itok=2O2r2zWa" alt="" />
               </div>
           </main>
         
               <section className='text-comp'>
                 <p> <span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus officiis culpa at? Culpa tenetur, dolorum, </span> et cum vero nemo nostrum, quis adipisci ducimus earum aperiam praesentium non enim totam magni.
                  Accusamus eligendi doloribus asperiores, dicta tempore velit commodi odit aut harum voluptatum, at ad repudiandae inventore recusandae est omnis veritatis! Corrupti quas non similique libero ipsam, ullam tenetur fugiat quibusdam.
               </p>
              </section>}
      { < ExpenseItem /> */}
      < Expense />
      < ExpenseItemm />
      < ExpenseItems />
       </div>
    )
}

export default ExpenseItem