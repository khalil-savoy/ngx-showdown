import { NgModule } from '@angular/core';
import { ShowdownConfig } from './showdown-config.provider';
import { ShowdownConverter } from './showdown-converter.provider';
import { ShowdownComponent } from './showdown.component';
import { ShowdownPipe } from './showdown.pipe';
import { SourceDirective } from './source.directive';
import * as i0 from "@angular/core";
/**
 * @internal
 */
const DECLARATIONS = [
    ShowdownComponent,
    ShowdownPipe,
    SourceDirective
];
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
export class ShowdownModule {
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
    static forRoot(config) {
        return {
            ngModule: ShowdownModule,
            providers: [{ provide: ShowdownConfig, useValue: config }]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.2", ngImport: i0, type: ShowdownModule, declarations: [ShowdownComponent,
            ShowdownPipe,
            SourceDirective], exports: [ShowdownComponent,
            ShowdownPipe,
            SourceDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownModule, providers: [ShowdownConverter] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DECLARATIONS,
                    providers: [ShowdownConverter],
                    exports: DECLARATIONS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Nob3dkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFckQ7O0dBRUc7QUFDSCxNQUFNLFlBQVksR0FBRztJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7Q0FDaEIsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFNSCxNQUFNLE9BQU8sY0FBYztJQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW1CRztJQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBa0Q7UUFDL0QsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDekQsQ0FBQztJQUNKLENBQUM7dUdBM0JVLGNBQWM7d0dBQWQsY0FBYyxpQkF4QnpCLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osZUFBZSxhQUZmLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osZUFBZTt3R0FzQkosY0FBYyxhQUhkLENBQUMsaUJBQWlCLENBQUM7OzJGQUduQixjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxZQUFZO29CQUMxQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLFlBQVk7aUJBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFNob3dkb3duIGZyb20gJ3Nob3dkb3duJztcbmltcG9ydCB7IFNob3dkb3duQ29uZmlnIH0gZnJvbSAnLi9zaG93ZG93bi1jb25maWcucHJvdmlkZXInO1xuaW1wb3J0IHsgU2hvd2Rvd25Db252ZXJ0ZXIgfSBmcm9tICcuL3Nob3dkb3duLWNvbnZlcnRlci5wcm92aWRlcic7XG5pbXBvcnQgeyBTaG93ZG93bkNvbXBvbmVudCB9IGZyb20gJy4vc2hvd2Rvd24uY29tcG9uZW50JztcbmltcG9ydCB7IFNob3dkb3duUGlwZSB9IGZyb20gJy4vc2hvd2Rvd24ucGlwZSc7XG5pbXBvcnQgeyBTb3VyY2VEaXJlY3RpdmUgfSBmcm9tICcuL3NvdXJjZS5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBERUNMQVJBVElPTlMgPSBbXG4gIFNob3dkb3duQ29tcG9uZW50LFxuICBTaG93ZG93blBpcGUsXG4gIFNvdXJjZURpcmVjdGl2ZVxuXTtcblxuLyoqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIEFkZCBgU2hvd2Rvd25Nb2R1bGVgIHRvIGFwcCBgaW1wb3J0c2AuXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICogaW1wb3J0IHsgU2hvd2Rvd25Nb2R1bGUgfSBmcm9tICduZ3gtc2hvd2Rvd24nO1xuICpcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFsgU2hvd2Rvd25Nb2R1bGUgXTtcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4gKiBgYGBcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBERUNMQVJBVElPTlMsXG4gIHByb3ZpZGVyczogW1Nob3dkb3duQ29udmVydGVyXSxcbiAgZXhwb3J0czogREVDTEFSQVRJT05TXG59KVxuZXhwb3J0IGNsYXNzIFNob3dkb3duTW9kdWxlIHtcblxuICAvKipcbiAgICogX19FeGFtcGxlIDpfX1xuICAgKlxuICAgKiBBZGQgYFNob3dkb3duTW9kdWxlYCB0byBhcHAgYGltcG9ydHNgIHdpdGggY29uZmlnLlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gICAqIGltcG9ydCB7IFNob3dkb3duTW9kdWxlIH0gZnJvbSAnbmd4LXNob3dkb3duJztcbiAgICpcbiAgICogQE5nTW9kdWxlKHtcbiAgICogICBpbXBvcnRzOiBbIFNob3dkb3duTW9kdWxlLmZvclJvb3Qoe1xuICAgKiAgICAgc21hcnRJbmRlbnRhdGlvbkZpeDogdHJ1ZSxcbiAgICogICAgIGZvbzogJ2JhcicsXG4gICAqICAgICBmbGF2b3I6ICdnaXRodWInLFxuICAgKiAgICAgZXh0ZW5zaW9uczogWyB7dHlwZTonbGlzdGVuZXInLCBsaXN0ZW5lcnM6IHsnY29kZUJsb2Nrcy5hZnRlcic6IGNvbnNvbGUubG9nfX0gXVxuICAgKiAgIH0pIF07XG4gICAqIH0pXG4gICAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiAgICogYGBgXG4gICAqIEBwYXJhbSBjb25maWcgLSBBIHJvb3QgY29udmVydGVyIGNvbmZpZyBmb3IgYWxsIGNvbnZlcnRlciBpbnN0YW5jZXMuXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IFNob3dkb3duQ29uZmlnIHwgU2hvd2Rvd24uQ29udmVydGVyT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U2hvd2Rvd25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNob3dkb3duTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFNob3dkb3duQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnfV1cbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==