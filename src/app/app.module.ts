import { NgModule } from '@angular/core';
import { QuestionComponent } from './MentalComponents/question/question.component';
import { AnswerComponent } from './MentalComponents/answer/answer.component';
import { QuizComponent } from './MentalComponents/quiz/quiz.component';
import { AddQuestionComponent } from './MentalComponents/add-question/add-question.component';
import { AddAnswerComponent } from './MentalComponents/add-answer/add-answer.component';
import { AddQuizComponent } from './MentalComponents/add-quiz/add-quiz.component';
import { ROUTES, RouterModule } from '@angular/router';
import { UpdateAnswerComponent } from './MentalComponents/update-answer/update-answer.component';
import { UpdateQuestionComponent } from './MentalComponents/update-question/update-question.component';
import { UpdateQuizComponent } from './MentalComponents/update-quiz/update-quiz.component';
import { NoteComponent } from './MentalComponents/note/note.component';
import { AddNoteComponent } from './MentalComponents/add-note/add-note.component';
import { UpdateNoteComponent } from './MentalComponents/update-note/update-note.component';
import { ShowComponent } from './MentalComponents/show/show.component';
import { QuizClientComponent } from './MentalComponents/quiz-client/quiz-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { QuizNotifyComponent } from './MentalComponents/quiz-notify/quiz-notify.component';
import { ToastrModule } from 'ngx-toastr';
import { RatingComponent } from './MentalComponents/rating/rating.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { QuizShowComponent } from './MentalComponents/quiz-show/quiz-show.component';
import { AcceuilMentalComponent } from './MentalComponents/acceuil-mental/acceuil-mental.component';
import { MentalChatbotComponent } from './MentalComponents/mental-chatbot/mental-chatbot.component';
import { AddMentalProgramComponent } from './MentalComponents/add-mental-program/add-mental-program.component';
import { UpdateMentalProgramComponent } from './MentalComponents/update-mental-program/update-mental-program.component';
import { MentalProgramComponent } from './MentalComponents/mental-program/mental-program.component';
import { MentalProgramClientComponent } from './MentalComponents/mental-program-client/mental-program-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { BodyFrontComponent } from './FrontOffice/body-front/body-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { NavBarFrontComponent } from './FrontOffice/nav-bar-front/nav-bar-front.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ErrorInterceptor } from './services/error.interceptor';
import { LoginforgetpasswordComponent } from './pages/loginforgetpassword/loginforgetpassword.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostAbonnementComponent } from './components/post-abonnement/post-abonnement.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { UpdateAbonnementComponent } from './components/update-abonnement/update-abonnement.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './customer/components/dabhoard/dashboard/dashboard.component';
import { CartComponent } from './customer/components/cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { PlaceOrderComponent } from './customer/components/place-order/place-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MatMenuModule } from '@angular/material/menu';
import { MyOrdersComponent } from './customer/components/my-orders/my-orders.component';
import { PostAbonnementFaqComponent } from './customer/components/post-abonnement-faq/post-abonnement-faq.component'; // Importez MatMenuModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfilecustomerComponent } from './customer/components/profilecustomer/profilecustomer.component';
import { CoachComponent } from './coach/coach.component';
import { ViewOrderedAbonnementsComponent } from './customer/components/view-ordered-abonnements/view-ordered-abonnements.component';
import { NavbarloginComponent } from './customer/components/navbarlogin/navbarlogin.component';
import Swal from 'sweetalert2';




@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    QuestionComponent,
    AnswerComponent,
    QuizComponent,
    AddQuestionComponent,
    AddAnswerComponent,
    AddQuizComponent,
    UpdateAnswerComponent,
    UpdateQuestionComponent,
    UpdateQuizComponent,
    NoteComponent,
    AddNoteComponent,
    UpdateNoteComponent,
    ShowComponent,
    AllTemplateFrontComponent,
    BodyFrontComponent,
    NavBarFrontComponent,
    FooterFrontComponent,
    QuizClientComponent,
    QuizNotifyComponent,
    RatingComponent,
    QuizShowComponent,
    AcceuilMentalComponent,
    MentalChatbotComponent,
    AddMentalProgramComponent,
    UpdateMentalProgramComponent,
    MentalProgramComponent,
    MentalProgramClientComponent,
    LoginforgetpasswordComponent,
    AppComponent,
    AllTemplateBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    FooterBackComponent,
    AllTemplateFrontComponent,
    BodyFrontComponent,
    FooterFrontComponent,
    NavBarFrontComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    UserDashboardComponent,
    ProfileComponent,
    VerificationComponent,
    PostCategoryComponent,
    PostAbonnementComponent,
    UpdateAbonnementComponent,
    CustomerComponent,
    DashboardComponent,
    CartComponent,
    PostCouponComponent,
    CouponsComponent,
    PlaceOrderComponent,
    OrdersComponent,
    MyOrdersComponent,
    PostAbonnementFaqComponent,
    ProfilecustomerComponent,
    CoachComponent,
    ViewOrderedAbonnementsComponent,
    NavbarloginComponent,
    
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,MatDialogModule,MatToolbarModule,
    BrowserModule, MatInputModule,MatNativeDateModule,
    MatFormFieldModule,NoopAnimationsModule,
    FormsModule,MatIconModule,MatDatepickerModule,
    AppRoutingModule,MatDividerModule,MatMenuModule,
    HttpClientModule, MatSnackBarModule,MatSelectModule,
    MatCardModule,MatTableModule
  ],
         
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
