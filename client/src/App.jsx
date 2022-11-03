import { NavBar, Services, Transactions, Welcome,Footer } from "./components";
import {TransactionProvider} from './context/TransactionContext';
const App = () => (
  <TransactionProvider>
    <NavBar />
    <Welcome/>
    <Services/>
    <Transactions/>
    <Footer/>
  </TransactionProvider>
);

export default App;
