import { Routes } from '@angular/router';

// Import demo components
import { CounterBasicComponent } from './features/signals-demo/counter-basic/counter-basic.component';
import { SignalMethodsComponent } from './features/signals-demo/signal-methods/signal-methods.component';
import { ComputedDemoComponent } from './features/signals-demo/computed-demo/computed-demo.component';
import { EffectDemoComponent } from './features/signals-demo/effect-demo/effect-demo.component';
import { NgIfDemoComponent } from './features/signals-demo/ngif-demo/ngif-demo.component';
import { NgForDemoComponent } from './features/signals-demo/ngfor-demo/ngfor-demo.component';
import { LetDemoComponent } from './features/signals-demo/let-demo/let-demo.component';
import { NgTemplateDemoComponent } from './features/signals-demo/ng-template-demo/ng-template-demo.component';
import { BindingDemoComponent } from './features/signals-demo/binding-demo/binding-demo.component';
import { TwoWayDemoComponent } from './features/signals-demo/twoway-demo/twoway-demo.component';
import { ComputedTemplateComponent } from './features/signals-demo/computed-template/computed-template.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signals/counter-basic', pathMatch: 'full' },
  { path: 'signals/counter-basic', component: CounterBasicComponent },
  { path: 'signals/signal-methods', component: SignalMethodsComponent },
  { path: 'signals/computed-demo', component: ComputedDemoComponent },
  { path: 'signals/effect-demo', component: EffectDemoComponent },
  { path: 'signals/ngif-demo', component: NgIfDemoComponent },
  { path: 'signals/ngfor-demo', component: NgForDemoComponent },
  { path: 'signals/let-demo', component: LetDemoComponent },
  { path: 'signals/ng-template-demo', component: NgTemplateDemoComponent },
  { path: 'signals/binding-demo', component: BindingDemoComponent },
  { path: 'signals/twoway-demo', component: TwoWayDemoComponent },
  { path: 'signals/computed-template', component: ComputedTemplateComponent },
];
