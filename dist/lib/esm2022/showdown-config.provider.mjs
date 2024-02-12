/**
 * @internal
 */
let { hasOwnProperty } = {};
/**
 * A config provider
 *
 * ### Example
 *
 * Set custom config provider.
 * ```typescript
 * import { NgModel } from '@angular/core';
 * import { ShowdownModule, ShowdownConfig } from 'ngx-showdown';
 *
 * export class MyShowdownConfig extends ShowdownConfig {
 *   emoji = true;
 *   underscore = false;
 *   flavor = 'github';
 * }
 *
 * @NgModel({
 *   imports: [ ShowdownModule ],
 *   providers: [ {provide: ShowdownConfig, useClass: MyConverterOptions} ]
 * })
 * export class AppModule {}
 * ```
 */
export class ShowdownConfig {
    /**
     * @see https://github.com/showdownjs/showdown/blob/master/README.md#flavors
     */
    flavor;
    constructor(options) {
        this.merge(options);
    }
    /**
     * Merge options
     *
     * @param options - A options object to merge.
     */
    merge(options) {
        for (let key in options) {
            if (hasOwnProperty.call(options, key)) {
                this[key] = options[key];
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Rvd24tY29uZmlnLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Nob3dkb3duLWNvbmZpZy5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7R0FFRztBQUNILElBQUksRUFBQyxjQUFjLEVBQUMsR0FBRyxFQUFFLENBQUM7QUFLMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFDSCxNQUFNLE9BQU8sY0FBYztJQUV6Qjs7T0FFRztJQUNILE1BQU0sQ0FBbUI7SUFFekIsWUFBWSxPQUFvRDtRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFFLE9BQW1EO1FBQy9ELEtBQUssSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3ZCLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNob3dkb3duIGZyb20gJ3Nob3dkb3duJztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xubGV0IHtoYXNPd25Qcm9wZXJ0eX0gPSB7fTtcblxuZXhwb3J0IGludGVyZmFjZSBTaG93ZG93bkNvbmZpZyBleHRlbmRzIFNob3dkb3duLkNvbnZlcnRlck9wdGlvbnMge1xufVxuXG4vKipcbiAqIEEgY29uZmlnIHByb3ZpZGVyXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBTZXQgY3VzdG9tIGNvbmZpZyBwcm92aWRlci5cbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqIGltcG9ydCB7IFNob3dkb3duTW9kdWxlLCBTaG93ZG93bkNvbmZpZyB9IGZyb20gJ25neC1zaG93ZG93bic7XG4gKlxuICogZXhwb3J0IGNsYXNzIE15U2hvd2Rvd25Db25maWcgZXh0ZW5kcyBTaG93ZG93bkNvbmZpZyB7XG4gKiAgIGVtb2ppID0gdHJ1ZTtcbiAqICAgdW5kZXJzY29yZSA9IGZhbHNlO1xuICogICBmbGF2b3IgPSAnZ2l0aHViJztcbiAqIH1cbiAqXG4gKiBATmdNb2RlbCh7XG4gKiAgIGltcG9ydHM6IFsgU2hvd2Rvd25Nb2R1bGUgXSxcbiAqICAgcHJvdmlkZXJzOiBbIHtwcm92aWRlOiBTaG93ZG93bkNvbmZpZywgdXNlQ2xhc3M6IE15Q29udmVydGVyT3B0aW9uc30gXVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgU2hvd2Rvd25Db25maWcgaW1wbGVtZW50cyBTaG93ZG93bi5Db252ZXJ0ZXJPcHRpb25zIHtcblxuICAvKipcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2hvd2Rvd25qcy9zaG93ZG93bi9ibG9iL21hc3Rlci9SRUFETUUubWQjZmxhdm9yc1xuICAgKi9cbiAgZmxhdm9yPzogU2hvd2Rvd24uRmxhdm9yO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBTaG93ZG93bkNvbmZpZyB8IFNob3dkb3duLkNvbnZlcnRlck9wdGlvbnMpIHtcbiAgICB0aGlzLm1lcmdlKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIG9wdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBBIG9wdGlvbnMgb2JqZWN0IHRvIG1lcmdlLlxuICAgKi9cbiAgcHVibGljIG1lcmdlPyhvcHRpb25zOiBTaG93ZG93bkNvbmZpZyB8IFNob3dkb3duLkNvbnZlcnRlck9wdGlvbnMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywga2V5KSkge1xuICAgICAgICB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==