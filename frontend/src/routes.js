import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import CondominiumsCreate from './pages/Condominiums/Create'
import CondominiumsEdit from './pages/Condominiums/Edit'
import CondominiumsIndex from './pages/Condominiums/Index'
import CondominiumsShow from './pages/Condominiums/Show'

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/condominios/adicionar" component={CondominiumsCreate} />
        <Route path="/condominios/editar/:id" component={CondominiumsEdit} />
        <Route path="/condominios/:id" component={CondominiumsShow} />
        <Route path="/" exact component={CondominiumsIndex} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Routes
