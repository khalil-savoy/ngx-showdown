import { ModuleWithProviders } from '@angular/core';
import * as Showdown from 'showdown';
import { ShowdownConfig } from './showdown-config.provider';
import * as i0 from "@angular/core";
import * as i1 from "./showdown.component";
import * as i2 from "./showdown.pipe";
import * as i3 from "./source.directive";
/**
 * ### Example
 *
 * Add `ShowdownModule` to app `imports`.
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { ShowdownModule } from 'ngx-showdown';
 *
 * @NgModule({
 *   imports: [ ShowdownModule ];
 * })
 * export class AppModule {}
 * ```
 */
export declare class ShowdownModule {
    /**
     * __Example :__
     *
     * Add `ShowdownModule` to app `imports` with config.
     * ```typescript
     * import { NgModule } from '@angular/core';
     * import { ShowdownModule } from 'ngx-showdown';
     *
     * @NgModule({
     *   imports: [ ShowdownModule.forRoot({
     *     smartIndentationFix: true,
     *     foo: 'bar',
     *     flavor: 'github',
     *     extensions: [ {type:'listener', listeners: {'codeBlocks.after': console.log}} ]
     *   }) ];
     * })
     * export class AppModule {}
     * ```
     * @param config - A root converter config for all converter instances.
     */
    static forRoot(config: ShowdownConfig | Showdown.ConverterOptions): ModuleWithProviders<ShowdownModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowdownModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ShowdownModule, [typeof i1.ShowdownComponent, typeof i2.ShowdownPipe, typeof i3.SourceDirective], never, [typeof i1.ShowdownComponent, typeof i2.ShowdownPipe, typeof i3.SourceDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ShowdownModule>;
}
