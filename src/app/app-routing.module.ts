import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { QuestionComponent } from './MentalComponents/question/question.component';
import { AddQuestionComponent } from './MentalComponents/add-question/add-question.component';
import { AddAnswerComponent } from './MentalComponents/add-answer/add-answer.component';
import { AddQuizComponent } from './MentalComponents/add-quiz/add-quiz.component';
import { AnswerComponent } from './MentalComponents/answer/answer.component';
import { QuizComponent } from './MentalComponents/quiz/quiz.component';
import { UpdateQuestionComponent } from './MentalComponents/update-question/update-question.component';
import { UpdateAnswerComponent } from './MentalComponents/update-answer/update-answer.component';
import { UpdateQuizComponent } from './MentalComponents/update-quiz/update-quiz.component';
import { AddNoteComponent } from './MentalComponents/add-note/add-note.component';
import { UpdateNoteComponent } from './MentalComponents/update-note/update-note.component';
import { NoteComponent } from './MentalComponents/note/note.component';
import { ShowComponent } from './MentalComponents/show/show.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { QuizClientComponent } from './MentalComponents/quiz-client/quiz-client.component';
import { QuizNotifyComponent } from './MentalComponents/quiz-notify/quiz-notify.component';
import { QuizShowComponent } from './MentalComponents/quiz-show/quiz-show.component';
import { AcceuilMentalComponent } from './MentalComponents/acceuil-mental/acceuil-mental.component';
import { MentalChatbotComponent } from './MentalComponents/mental-chatbot/mental-chatbot.component';
import { MentalProgramComponent } from './MentalComponents/mental-program/mental-program.component';
import { AddMentalProgramComponent } from './MentalComponents/add-mental-program/add-mental-program.component';
import { UpdateMentalProgramComponent } from './MentalComponents/update-mental-program/update-mental-program.component';
import { MentalProgramClientComponent } from './MentalComponents/mental-program-client/mental-program-client.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginforgetpasswordComponent } from './pages/loginforgetpassword/loginforgetpassword.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostAbonnementComponent } from './components/post-abonnement/post-abonnement.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateAbonnementComponent } from './components/update-abonnement/update-abonnement.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './customer/components/dabhoard/dashboard/dashboard.component';
import { CartComponent } from './customer/components/cart/cart.component';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MyOrdersComponent } from './customer/components/my-orders/my-orders.component';
import { PostAbonnementFaqComponent } from './customer/components/post-abonnement-faq/post-abonnement-faq.component';
import { CoachComponent } from './coach/coach.component';
import { ViewOrderedAbonnementsComponent } from './customer/components/view-ordered-abonnements/view-ordered-abonnements.component';
import { ProfilecustomerComponent } from './customer/components/profilecustomer/profilecustomer.component';







const routes: Routes = [
  { path: '', component: AllTemplateFrontComponent }, 
  
  { path: 'Admin', component: AllTemplateBackComponent},
  { path: 'listQuestion', component: QuestionComponent},
  { path: 'listAnswer', component: AnswerComponent},
  { path: 'listQuiz', component: QuizComponent},
  { path: 'listNote', component: NoteComponent},
  { path: 'addQuestion', component: AddQuestionComponent},
  { path: 'addAnswer', component: AddAnswerComponent},
  { path: 'addQuiz', component: AddQuizComponent},
  { path: 'addNote', component: AddNoteComponent},
  { path: 'updateQuestion/:id', component: UpdateQuestionComponent},
  { path: 'updateAnswer/:id', component: UpdateAnswerComponent},
  { path: 'updateQuiz/:id', component: UpdateQuizComponent},
  { path: 'updateNote/:id', component: UpdateNoteComponent},
  {path: 'quiz-details/:id', component:ShowComponent},
  {path: 'quiz-client', component:QuizClientComponent},
  {path: 'quiz-notify', component:QuizNotifyComponent},
  {path: 'show', component:ShowComponent},
  {path: 'show-quiz', component:QuizShowComponent},
  {path: 'acc', component:AcceuilMentalComponent},
  {path: 'chatbot', component:MentalChatbotComponent},
  {path: 'listProgram', component:MentalProgramComponent},
  { path: 'addProgram', component: AddMentalProgramComponent},
  { path: 'updateProgram/:id', component: UpdateMentalProgramComponent},
  { path: 'ProgramsForYou', component: MentalProgramClientComponent},
  {
    path:'signup',
    component : SignupComponent,
    pathMatch: 'full',
  },
  {
    path:'login',
    component : LoginComponent,
    
  },
  { path: 'forgetpassword', component: LoginforgetpasswordComponent},
  { path: 'verification', component: VerificationComponent},
  {
    path:"admin",
    component : AllTemplateBackComponent,
    canActivate:[AdminGuard],    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'category',
        component:PostCategoryComponent
      },
      {
        path:'abonnement',
        component:PostAbonnementComponent
      },
      {
        path:'abonnement/:abonnementId',
        component:UpdateAbonnementComponent
      },
      {
        path:'dashboard',
        component:NavbarComponent
      },
      {
        path:'post-coupon',
        component:PostCouponComponent
      },
      {
        path:'coupons',
        component:CouponsComponent
      },

      {
        path:'orders',
        component:OrdersComponent
      },
      
      {
        path:'faq/:abonnementId',
        component:PostAbonnementFaqComponent
      },
    
    
      

    ]
  },
  /*{
    path:'user-dashboard',
    component : UserDashboardComponent,
    pathMatch:'full',
    canActivate: [NormalGuard],
  },*/
  {
    path:'customer',
    component : DashboardComponent,
    canActivate:[NormalGuard],
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },
  {
    path:'customer/cart',
    canActivate:[NormalGuard],    component : CartComponent,
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },
  {
    path:'customer/my_orders',
    component : MyOrdersComponent,
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },
  {
    path:'customer/profile',
    component : ProfilecustomerComponent,
    canActivate:[NormalGuard],    
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },
  {
    path:'customer/ordered_abonnements/:orderId',
    component : ViewOrderedAbonnementsComponent,
    canActivate:[NormalGuard],    
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },
  {
    path:'coach',
    component : CoachComponent,
    canActivate:[NormalGuard],
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },

  {path:"",
  component: AllTemplateFrontComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
