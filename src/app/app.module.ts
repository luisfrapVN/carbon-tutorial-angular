import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { NotificationModule, UIShellModule } from 'carbon-components-angular';
import { HeaderComponent } from './header/header.component';
import { UserAvatarModule, AppSwitcherModule } from '@carbon/icons-angular';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		NotificationModule,
		UserAvatarModule,
		AppSwitcherModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
