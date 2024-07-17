
const CraftCategories = () => {
    return (
        <div>
            <h3 className='font-bold text-3xl text-center mt-16 mb-8'>Craft Categories</h3>
            <div className="my-6 mx-10">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" defaultChecked name="my_tabs_2" role="tab" className="tab" aria-label="Landscape Painting" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 py-16">
                        <ul className="steps steps-vertical">
                            <li className="step"> Mountain view canva</li>
                            <li className="step">Forest based Landscape
                                painting</li>
                        </ul>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Portrait Drawing" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  py-16">
                        <ul className="steps steps-vertical">
                            <li className="step"> Pencil Sketch Portrait</li>
                            <li className="step">Ink Outline Portrait</li>
                            <li className="step">Acrylic
                                Portrait Canvas</li>
                        </ul>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Watercolour Painting" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  py-16">
                        <ul className="steps steps-vertical">
                            <li className="step"> Floral Watercolor Art</li>
                            <li className="step">Animal Watercolor Portrait</li>
                        </ul>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Oil Painting" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  py-16">
                        <ul className="steps steps-vertical">
                            <li className="step"> Realistic Oil Portrait</li>
                            <li className="step">Abstract Oil Painting</li>
                        </ul>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Charcoal Sketching" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  py-16">
                        <ul className="steps steps-vertical">
                            <li className="step">Figure Charcoal Sketch</li>
                            <li className="step">Architectural Charcoal Drawing</li>
                        </ul>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Cartoon Drawing" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  py-16">
                        <ul className="steps steps-vertical">
                            <li className="step">Comic Strip Drawing</li>
                            <li className="step">Superhero Cartoon Design</li>
                            <li className="step">Batman Cartoon Design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCategories;