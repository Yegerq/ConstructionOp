// Design System Documentation Component
export function DesignSystem() {
  return (
    <div className="p-8 space-y-12">
      {/* Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="w-full h-20 bg-emerald-600 rounded-lg"></div>
            <p className="text-sm font-medium">Primary: emerald-600</p>
            <p className="text-xs text-gray-500">#059669</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-20 bg-teal-600 rounded-lg"></div>
            <p className="text-sm font-medium">Secondary: teal-600</p>
            <p className="text-xs text-gray-500">#0d9488</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-20 bg-gray-900 rounded-lg"></div>
            <p className="text-sm font-medium">Dark: gray-900</p>
            <p className="text-xs text-gray-500">#111827</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-20 bg-gray-50 rounded-lg border"></div>
            <p className="text-sm font-medium">Light: gray-50</p>
            <p className="text-xs text-gray-500">#f9fafb</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Typography</h2>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">Heading 1</h1>
            <p className="text-sm text-gray-500">text-4xl lg:text-6xl font-bold</p>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Heading 2</h2>
            <p className="text-sm text-gray-500">text-3xl lg:text-4xl font-bold</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Heading 3</h3>
            <p className="text-sm text-gray-500">text-xl font-semibold</p>
          </div>
          <div>
            <p className="text-lg text-gray-600">Body Large - Lorem ipsum dolor sit amet</p>
            <p className="text-sm text-gray-500">text-lg text-gray-600</p>
          </div>
          <div>
            <p className="text-base text-gray-700">Body Regular - Lorem ipsum dolor sit amet</p>
            <p className="text-sm text-gray-500">text-base text-gray-700</p>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Spacing Scale</h2>
        <div className="space-y-2">
          {[4, 8, 12, 16, 20, 24, 32].map((space) => (
            <div key={space} className="flex items-center space-x-4">
              <div className={`w-${space} h-4 bg-emerald-600 rounded`}></div>
              <span className="text-sm">
                {space / 4}rem ({space}px)
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Border Radius</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="w-20 h-20 bg-emerald-600 rounded-lg"></div>
            <p className="text-sm">rounded-lg (8px)</p>
          </div>
          <div className="space-y-2">
            <div className="w-20 h-20 bg-emerald-600 rounded-xl"></div>
            <p className="text-sm">rounded-xl (12px)</p>
          </div>
          <div className="space-y-2">
            <div className="w-20 h-20 bg-emerald-600 rounded-2xl"></div>
            <p className="text-sm">rounded-2xl (16px)</p>
          </div>
          <div className="space-y-2">
            <div className="w-20 h-20 bg-emerald-600 rounded-full"></div>
            <p className="text-sm">rounded-full</p>
          </div>
        </div>
      </section>
    </div>
  )
}
