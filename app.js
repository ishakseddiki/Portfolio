const projects = [
  {
    "id": "refinery",
    "number": "01",
    "title": "Integrated Petroleum Refinery Modelling",
    "subtitle": "Industrial-scale Aspen HYSYS V11 refinery model connecting crude characterization, atmospheric and vacuum separation, conversion units, naphtha upgrading, gasoline-component production and internal hydrogen generation.",
    "category": "process",
    "filters": [
      "process"
    ],
    "tags": [
      "Aspen HYSYS V11",
      "Refinery",
      "Process Integration",
      "Crude Assay"
    ],
    "image": "assets/img/refinery-hero.webp",
    "poster": "assets/img/refinery-poster.jpg",
    "video": "assets/video/integrated-refinery.mp4",
    "featured": true,
    "metrics": [
      [
        "450.7 t/h",
        "Crude feed"
      ],
      [
        "≈108",
        "Reformate RON"
      ],
      [
        "4,095 Sm³/h",
        "Net H₂ production"
      ]
    ],
    "overview": "This project develops an integrated petroleum-refinery flowsheet in Aspen HYSYS V11. Rather than treating individual units independently, the model links upstream separation, catalytic and thermal conversion, hydrotreating, gasoline upgrading and hydrogen production so material from one section becomes the feed to the next. The simulated pathway covers crude-oil characterization and preparation, CDU, VDU, hydrocracking, FCC, visbreaking, naphtha hydrotreating, catalytic reforming, light-naphtha isomerization and alkylation.",
    "challenge": "The engineering challenge was to represent a refinery as one connected material and energy system. Crude pseudo-components must be characterized consistently, fractionation must generate realistic downstream feed cuts, conversion sections must receive compatible petroleum lumps, and hydrogen-producing and hydrogen-consuming units must be integrated without losing track of product quality, pressure, temperature and recycle relationships.",
    "build": "I built the refinery from crude-assay characterization through primary fractionation and upgrading. The CDU processes about 450,700 kg/h of crude and produces naphtha, kerosene, diesel, atmospheric gas oil and residue. Atmospheric residue is routed to vacuum distillation; heavy gas-oil fractions are sent toward upgrading, while the remaining refinery sections represent hydrocracking, FCC, visbreaking, NHT, reforming, isomerization and alkylation. Product quality and hydrogen integration are evaluated at refinery scale.",
    "outcome": "The model provides an industrial-scale platform for studying refinery-wide material flows and product upgrading. In the recorded case, catalytic reforming produces reformate around RON 108 and approximately 4,095 Sm³/h of net hydrogen. The integrated model also exposes the validation tasks that matter before optimization or economic work, including petroleum-lump mapping, reaction-set assignments and selected pressure definitions.",
    "methodology": [
      "Characterized Basrah Medium crude using HYSYS petroleum fractions and pseudo-components derived from crude-assay properties.",
      "Prepared the crude through heat exchange, mixing, water addition/separation and final heating before atmospheric distillation.",
      "Modelled CDU side products and side stripping, then routed atmospheric residue to a deep-vacuum VDU for LVGO, HVGO and vacuum-residue recovery.",
      "Integrated catalytic and thermal upgrading sections including hydrocracking, FCC and visbreaking.",
      "Included naphtha hydrotreating, catalytic reforming, isomerization and alkylation to represent gasoline-component upgrading and hydrogen generation.",
      "Tracked mass-flow rates, operating temperatures/pressures, sulfur removal, octane quality and refinery-wide stream connectivity."
    ],
    "engineering": [
      "CDU feed: ~450,700 kg/h at ~343.3 °C.",
      "Representative CDU products: naphtha ~67,020 kg/h, kerosene ~39,410 kg/h, diesel ~42,780 kg/h, AGO ~12,880 kg/h and atmospheric bottoms ~287,200 kg/h.",
      "VDU feed temperature ~404.4 °C, with deep-vacuum operation around −0.947 to −0.931 bar(g) in the documented case.",
      "Hydrocracker uses a multi-bed configuration with bed inlet temperatures around 371 °C and some outlet temperatures near 410 °C.",
      "NHT reduced the documented sulfur concentration from about 98.99 ppmw toward near-zero in the simulated treated stream.",
      "Reforming produced high-octane reformate (~108 RON) and a net hydrogen stream used as an integration resource across the refinery."
    ],
    "results": [
      "Industrial-scale crude throughput gives the case enough scale to evaluate interactions between major refinery sections instead of isolated unit behaviour.",
      "High-octane reformate and internal hydrogen production demonstrate the value of integrating conversion, upgrading and hydrogen management in one flowsheet.",
      "Alkylation and isomerization provide additional gasoline blending components with different quality characteristics.",
      "The model forms a technical basis for future sensitivity analysis, optimization, energy integration, economic evaluation, environmental assessment and digital-twin work."
    ],
    "tools": [
      "Aspen HYSYS V11",
      "Crude assay / petroleum characterization",
      "Mass & energy balances",
      "Refinery reaction and separation models"
    ],
    "future": "Final engineering validation should focus on petroleum-lump consistency, reaction-set assignments, pressure definitions, product-quality checks and reconciliation of section-by-section balances before using the model for rigorous economics or automated optimization.",
    "note": "Several sections reached convergence, but the source documentation explicitly identifies petroleum-lump mapping and selected pressure / reaction definitions as validation items before final performance conclusions."
  },
  {
    "id": "zeolite",
    "number": "02",
    "title": "AI-Driven Zeolite Synthesis Prediction",
    "subtitle": "Materials-informatics workflow that predicts zeolite framework topology from precursor-gel chemistry, hydrothermal synthesis conditions and OSDA molecular information before laboratory experimentation.",
    "category": "ai",
    "filters": [
      "ai",
      "materials"
    ],
    "tags": [
      "Materials Informatics",
      "XGBoost",
      "SMILES",
      "Multiclass Classification"
    ],
    "image": "assets/img/zeolite-hero.webp",
    "caseImage": "assets/img/zeolite-performance.svg",
    "caseImageAlt": "ZeoSyn model-performance comparison and top ten framework-class distribution",
    "caseImageCaption": "Model comparison and dataset context: XGBoost reached 0.76 accuracy and 0.76 weighted F1, while the class distribution shows a large failed-synthesis group and substantial framework imbalance.",
    "featured": true,
    "metrics": [
      [
        "0.76",
        "XGBoost accuracy"
      ],
      [
        "0.76",
        "Weighted F1"
      ],
      [
        "0.63",
        "RF macro recall"
      ]
    ],
    "overview": "The project addresses the synthesis bottleneck in zeolite discovery: many framework structures may be theoretically feasible, but predicting which hydrothermal recipe will actually crystallize a desired topology is difficult. The workflow learns from historical synthesis records and uses gel composition, hydrothermal conditions and organic structure-directing-agent information to estimate the most likely zeolite framework class.",
    "challenge": "Zeolite formation depends on many interacting variables rather than a single dominant parameter. Precursor composition, elemental ratios, water content, crystallization temperature/time and OSDA chemistry can interact nonlinearly, and similar recipes may produce different outcomes. The dataset is also heterogeneous and incomplete, so preprocessing and target definition are as important as the final classifier.",
    "build": "I structured the work as a materials-informatics and multiclass machine-learning pipeline. Records were screened for useful synthesis information; OSDAs were represented using SMILES-derived molecular information; composition, hydrothermal and molecular features were integrated; informative variables were retained; missing values were handled through iterative imputation; and failed synthesis records were kept as a dedicated class. DNN, Random Forest and XGBoost models were then compared using macro and weighted classification metrics.",
    "outcome": "XGBoost achieved the strongest overall classification performance with 0.76 accuracy and 0.76 weighted F1. Random Forest achieved the highest macro recall at 0.63, showing a useful trade-off between overall performance and class-balanced recovery. The project demonstrates how heterogeneous synthesis records can be transformed into a screening tool for prioritizing candidate hydrothermal recipes.",
    "methodology": [
      "Selected experimental synthesis routes containing either usable OSDA/SMILES information or sufficiently complete synthesis conditions.",
      "Encoded OSDA molecular structure through machine-readable SMILES representation rather than using only categorical OSDA names.",
      "Combined precursor-gel chemistry, crystallization temperature/time and OSDA molecular characteristics into a common feature space.",
      "Used feature selection to reduce non-informative variables and focus the model on synthesis–structure relationships.",
      "Applied iterative imputation so incomplete historical records could be retained instead of discarded wholesale.",
      "Defined the target as zeolite framework class and retained unsuccessful experiments as a separate failed-synthesis class.",
      "Benchmarked Deep Neural Network, Random Forest and XGBoost classifiers with macro and weighted precision, recall and F1 metrics."
    ],
    "engineering": [
      "The problem is treated as recipe-to-topology mapping rather than simple property regression.",
      "Exploratory analysis includes correlation heatmaps and normalized distributions to identify redundancy, scale differences and heterogeneous variable behaviour.",
      "Macro metrics are used to reveal performance across classes, while weighted metrics reflect the real class distribution.",
      "Failure data are deliberately retained because unsuccessful synthesis routes contain useful information about regions of the design space that should not be prioritized."
    ],
    "results": [
      "DNN: accuracy 0.61; weighted F1 0.59.",
      "Random Forest: accuracy 0.73; macro recall 0.63; weighted F1 0.73.",
      "XGBoost: accuracy 0.76; macro precision 0.64; macro recall 0.59; macro F1 0.60; weighted F1 0.76.",
      "The comparison suggests gradient-boosted trees captured the nonlinear synthesis relationships most effectively in the implemented configuration."
    ],
    "tools": [
      "Python",
      "XGBoost",
      "Random Forest",
      "Deep Neural Network",
      "SMILES / molecular descriptors",
      "Iterative imputation"
    ],
    "future": "The workflow can be extended toward uncertainty-aware candidate ranking, active learning and inverse synthesis design once the underlying synthesis database, class balance and external validation protocol are expanded."
  },
  {
    "id": "exchanger",
    "number": "03",
    "title": "3D CFD Heat-Exchanger Analysis",
    "subtitle": "Complete three-dimensional COMSOL model of a baffled shell-and-tube heat exchanger coupling turbulent flow, conjugate heat transfer and near-wall diagnostics.",
    "category": "multiphysics",
    "filters": [
      "multiphysics"
    ],
    "tags": [
      "COMSOL",
      "CFD",
      "Heat Transfer",
      "k–ε"
    ],
    "image": "assets/img/exchanger-hero.webp",
    "poster": "assets/img/exchanger-poster.jpg",
    "video": "assets/video/heat-exchanger-cfd.mp4",
    "featured": false,
    "metrics": [
      [
        "80 °C",
        "Hot-water inlet"
      ],
      [
        "5 °C",
        "Cold-air inlet"
      ],
      [
        "≈10.5 Pa",
        "Shell-side ΔP"
      ]
    ],
    "overview": "This project develops a full 3D computational model of a baffled shell-and-tube heat exchanger in COMSOL Multiphysics. It studies how tube-bundle geometry and shell-side baffles control the coupled hydrodynamic and thermal behaviour of the exchanger, including velocity redistribution, pressure loss, mixing, wall heat transfer and the temperature evolution of both fluid streams.",
    "challenge": "Baffles improve shell-side mixing and heat transfer by repeatedly redirecting the flow across the tube bundle, but they also increase hydraulic resistance and can create local acceleration, wakes, recirculation or stagnant zones. The design problem is therefore a thermal–hydraulic trade-off: increase heat-transfer effectiveness without introducing unnecessary pressure drop or poorly resolved near-wall flow.",
    "build": "I created the shell, tube bundle, nozzles and multiple baffles; separated water, air and metallic wall domains; assigned material properties; and coupled turbulent k–ε flow with heat transfer through the fluid and solid regions. Explicit selections were used to organize inlets, outlets, interfaces, baffles and interior walls. The model was meshed and post-processed using velocity, pressure, temperature, streamlines, wall-resolution and wall-lift-off diagnostics.",
    "outcome": "The model shows how baffles force repeated cross-flow through the tube bundle, increasing local mixing while generating pressure losses. The displayed shell-side case has an inlet air velocity of 1 m/s, local velocities around 1.2–1.3 m/s in restricted regions, and an approximate shell-side pressure difference of 10.5 Pa. Thermal plots show cold air warming from its 5 °C inlet condition as it exchanges heat with 80 °C water through the steel wall.",
    "methodology": [
      "Built a 3D baffled shell-and-tube exchanger geometry with fluid and solid domains.",
      "Assigned hot water, cold air and AISI 4340 steel to represent the two working fluids and conductive heat-transfer walls.",
      "Applied turbulent flow using the k–ε interface to resolve velocity and pressure throughout the exchanger.",
      "Coupled the flow solution to heat-transfer physics so the CFD velocity field directly drives convective energy transport.",
      "Used mesh refinement and near-wall diagnostics to evaluate whether high-gradient regions were sufficiently resolved.",
      "Generated velocity, pressure, temperature, combined temperature/flow, streamline-temperature, wall-resolution and wall-lift-off result groups."
    ],
    "engineering": [
      "Hot-water inlet: 80 °C with inlet velocity ~0.1 m/s.",
      "Cold-air inlet: 5 °C with inlet velocity ~1 m/s.",
      "Initial temperature driving force is approximately 75 °C.",
      "Baffle restrictions produce local shell-side acceleration above the inlet velocity.",
      "Pressure-drop analysis is treated as a design constraint because extra mixing must be balanced against fan/compressor or pumping power."
    ],
    "results": [
      "Local shell-side velocities reached roughly 1.2–1.3 m/s in higher-velocity regions.",
      "Approximate shell-side pressure difference in the displayed case: ~10.5 Pa.",
      "Streamline-temperature visualization shows progressive shell-side air heating into the mid-teen °C range in parts of the modeled path.",
      "The model exposes acceleration zones, low-velocity regions, wakes, possible recirculation and thermal non-uniformity for geometry-driven design analysis."
    ],
    "tools": [
      "COMSOL Multiphysics",
      "Turbulent Flow k–ε",
      "Heat Transfer in Fluids/Solids",
      "3D geometry & meshing",
      "Post-processing"
    ],
    "future": "The model can be extended with geometry optimization, alternative baffle cuts/spacing, exchanger effectiveness, overall heat-transfer coefficient, LMTD/NTU comparison, pumping-power penalties and validation against design correlations or experimental data."
  },
  {
    "id": "solubility",
    "number": "04",
    "title": "Organic Solubility Prediction with Scientific ML",
    "subtitle": "Cheminformatics and uncertainty-aware regression using solute/solvent molecular descriptors and temperature to reduce exhaustive experimental solubility screening.",
    "category": "ai",
    "filters": [
      "ai",
      "materials"
    ],
    "tags": [
      "RDKit",
      "BigSolDB",
      "MLP",
      "Uncertainty Quantification"
    ],
    "image": "assets/img/solubility-hero.webp",
    "metrics": [
      [
        "54,273",
        "Measurements"
      ],
      [
        "0.9122",
        "MLP test R²"
      ],
      [
        "0.00458",
        "External MAE"
      ]
    ],
    "overview": "This project builds a machine-learning framework for predicting organic-compound solubility across different solvents and temperatures. Instead of relying only on repeated laboratory measurements or thermodynamic models requiring unavailable fusion properties, the workflow converts solute and solvent molecular structures into numerical descriptors and learns the relationship between molecular characteristics, temperature and experimental solubility.",
    "challenge": "Solubility depends on molecular size, polarity, hydrophobicity, hydrogen bonding, rigidity/flexibility, solvent identity, temperature and solid-state effects. A useful predictive model therefore needs chemical representations for both solute and solvent, robust preprocessing, a fair train/test evaluation and an estimate of how reliable predictions remain on unseen chemistry.",
    "build": "I used BigSolDB experimental records, converted solute and solvent SMILES into RDKit physicochemical descriptors, added temperature as an input, cleaned invalid molecular records and benchmarked MLP, Random Forest, XGBoost and Gaussian Process Regression. Model selection considered both predictive accuracy and generalization. A bootstrap-ensemble procedure estimated epistemic uncertainty, and an external holdout dataset was used as an additional validation stage.",
    "outcome": "The selected MLP produced test R² = 0.9122 with RMSE = 0.0303 and showed a small train–test performance gap. Reported uncertainty remained stable between train and test (about 0.0114 to 0.0117), while the external validation produced MAE = 0.00458. The result is a computational screening workflow for solvent-selection and separation-related studies.",
    "methodology": [
      "Acquired experimental solubility data from BigSolDB and retained solute SMILES, solvent SMILES, temperature and measured solubility.",
      "Generated seven descriptors for each solute and solvent: molecular weight, LogP, TPSA, H-bond donors, H-bond acceptors, aromatic rings and rotatable bonds.",
      "Removed invalid SMILES and incomplete descriptor rows before modelling.",
      "Used normalized distributions, correlation heatmaps and scatter plots to understand scale, redundancy and nonlinear trends.",
      "Benchmarked MLP, Random Forest, XGBoost and Gaussian Process Regression on a consistent feature set.",
      "Estimated epistemic uncertainty with bootstrap ensembles and used an independent holdout set for additional validation."
    ],
    "engineering": [
      "Approximately 15 numerical inputs are formed from seven solute descriptors, seven solvent descriptors and temperature.",
      "The workflow is designed for fast computational screening rather than replacing every rigorous thermodynamic calculation.",
      "Model choice explicitly considers overfitting, generalization and uncertainty rather than training fit alone.",
      "External validation provides an additional check beyond the original random train/test split."
    ],
    "results": [
      "Selected MLP: test R² = 0.9122 and test RMSE = 0.0303.",
      "Training and test uncertainty remained close (~0.0114 vs ~0.0117), indicating stable model dispersion under the reported procedure.",
      "External holdout validation: MAE = 0.00458.",
      "Random Forest achieved very strong training performance but a larger generalization drop, illustrating why the best training score was not selected automatically."
    ],
    "tools": [
      "Python",
      "RDKit",
      "BigSolDB",
      "MLP",
      "Random Forest",
      "XGBoost",
      "Gaussian Process Regression",
      "Bootstrap UQ"
    ],
    "future": "Future work can add scaffold-aware or compound-wise splitting, calibrated prediction intervals, richer molecular fingerprints/embeddings and solvent thermodynamic descriptors for stronger chemical extrapolation."
  },
  {
    "id": "vcm",
    "number": "05",
    "title": "Integrated Vinyl Chloride Monomer Production",
    "subtitle": "Aspen HYSYS V11 process model integrating direct chlorination, oxychlorination, EDC purification, thermal cracking, VCM recovery and internal HCl/EDC recycle loops.",
    "category": "process",
    "filters": [
      "process"
    ],
    "tags": [
      "Aspen HYSYS V11",
      "VCM",
      "Reaction + Separation",
      "Recycle"
    ],
    "image": "assets/img/vcm-hero.webp",
    "poster": "assets/img/vcm-poster.jpg",
    "video": "assets/video/vcm.mp4",
    "metrics": [
      [
        "45.2 t/h",
        "VCM product"
      ],
      [
        "3",
        "Major reaction routes"
      ],
      [
        "HCl + EDC",
        "Internal recycle"
      ]
    ],
    "overview": "This project reproduces the main industrial route to vinyl chloride monomer in one integrated Aspen HYSYS V11 flowsheet. The simulation begins with ethylene, chlorine, hydrogen chloride, oxygen-containing gas and water; generates 1,2-dichloroethane (EDC) by direct chlorination and oxychlorination; purifies EDC; thermally cracks it to VCM and HCl; and then recovers valuable HCl and EDC for internal recycle.",
    "challenge": "VCM production is a tightly integrated reaction–separation–recycle problem. The cracking section generates HCl that should be reused in oxychlorination, while recoverable EDC should be returned to the cracking train. These material loops couple the sections strongly, so the complete HYSYS case must converge simultaneously while maintaining realistic reaction, purification and recycle behaviour.",
    "build": "I built feed preparation, mixing, compression and heat-exchange steps; direct-chlorination and oxychlorination reaction sections; EDC purification and liquid handling; thermal EDC cracking; quench/flash operations; downstream VCM separation; distillation; and recycle loops for HCl and recoverable EDC. The model represents the plant as a complete chemical-process flowsheet rather than an isolated reactor.",
    "outcome": "The converged simulation produces approximately 45,170 kg/h, or about 45.2 t/h, of VCM in the documented operating case. The integrated flowsheet demonstrates the circular material relationship between EDC production, EDC cracking, HCl recovery and EDC recycle, improving raw-material utilization and providing a basis for energy, utility and process-optimization studies.",
    "methodology": [
      "Direct chlorination: ethylene + chlorine → EDC.",
      "Oxychlorination: ethylene + HCl + oxygen → EDC + water.",
      "EDC purification combines reaction products before the cracking section.",
      "Thermal cracking converts purified EDC → VCM + HCl.",
      "Downstream separation recovers VCM product, HCl and unconverted/recoverable EDC.",
      "Recycle loops return HCl to oxychlorination and EDC to the appropriate upstream section, requiring whole-flowsheet convergence."
    ],
    "engineering": [
      "Principal ethylene feed in the documented case is ~832 kmol/h (~23,340 kg/h) at ~25 °C and ~152 kPa.",
      "Direct-chlorination Reactor 1 is shown operating around 60 °C in the recorded simulation.",
      "The plant contains mixing, heat exchange, compression, flash separation, liquid handling, purification, distillation and recycle operations.",
      "Material integration is central: generated HCl is treated as a reusable reactant rather than a simple waste stream."
    ],
    "results": [
      "Final VCM product stream: ~45,170 kg/h (~45.2 t/h).",
      "The model captures all three core reaction pathways: direct chlorination, oxychlorination and EDC cracking.",
      "Internal HCl and EDC recycle loops increase material utilization and make the model suitable for plant-wide sensitivity studies.",
      "The integrated case provides a stronger engineering basis than modelling any reaction section independently."
    ],
    "tools": [
      "Aspen HYSYS V11",
      "Reaction sets",
      "Distillation & separation",
      "Recycle convergence",
      "Heat exchange / compression"
    ],
    "future": "The process can be extended with detailed utility integration, energy optimization, equipment sizing, by-product/impurity treatment, control-loop studies, safety analysis and economic/environmental evaluation."
  },
  {
    "id": "corrosion",
    "number": "06",
    "title": "CO₂ Corrosion of Carbon Steel",
    "subtitle": "COMSOL electrochemical transport model coupling aqueous CO₂ chemistry, Nernst–Planck species transport, electrode kinetics and corrosion-rate prediction at the steel–electrolyte interface.",
    "category": "multiphysics",
    "filters": [
      "multiphysics"
    ],
    "tags": [
      "COMSOL 6.3",
      "Electrochemistry",
      "Nernst–Planck",
      "Parametric Sweep"
    ],
    "image": "assets/img/corrosion-hero.webp",
    "poster": "assets/img/corrosion-poster.jpg",
    "video": "assets/video/co2-corrosion.mp4",
    "metrics": [
      [
        "0.01–3 bar",
        "CO₂ sweep"
      ],
      [
        "20–80 °C",
        "Temperature sweep"
      ],
      [
        "≈2.6–2.7 mm/y",
        "CR at 3 bar, 80 °C"
      ]
    ],
    "overview": "This project studies CO₂-induced corrosion of carbon steel with a multiphysics electrochemical model in COMSOL 6.3. The model represents a thin electrolyte diffusion layer next to the steel surface and couples CO₂/water chemistry with species transport and anodic/cathodic electrode reactions to calculate corrosion current and convert it into an engineering penetration rate.",
    "challenge": "CO₂ corrosion is controlled simultaneously by dissolved carbon chemistry, acidity, ionic transport, diffusion, electrochemical kinetics and operating conditions. Changes in CO₂ partial pressure or temperature alter species concentrations and electrode reaction rates, so the corrosion rate cannot be represented accurately by a single uncoupled equation.",
    "build": "I represented the near-wall electrolyte as a one-dimensional 50 µm diffusion layer and used the Tertiary Current Distribution, Nernst–Planck interface. The chemistry includes dissolved CO₂, carbonic acid, bicarbonate, H⁺, OH⁻ and Fe²⁺. Anodic iron dissolution and cathodic hydrogen reduction are coupled to transport, while Faraday’s law converts corrosion current density into steel penetration rate. A parametric sweep evaluates pressure and temperature effects.",
    "outcome": "The model predicts a strong increase in corrosion rate with both CO₂ pressure and temperature across the investigated range. At approximately 3 bar CO₂, the documented values are around 0.5 mm/year at 20 °C, 1.3 mm/year at 50 °C and 2.6–2.7 mm/year at 80 °C. The simulation also resolves local chemistry and concentration gradients that explain why bulk and surface conditions can differ.",
    "methodology": [
      "Defined a 1D electrolyte diffusion layer between the carbon-steel surface and bulk solution.",
      "Used Nernst–Planck transport to couple molecular diffusion, ionic migration and concentration gradients.",
      "Represented CO₂ dissolution, carbonic-acid formation/dissociation and water chemistry.",
      "Applied anodic Fe → Fe²⁺ + 2e⁻ and cathodic hydrogen-reduction kinetics at the metal surface.",
      "Converted corrosion current density to penetration rate using Faraday’s law.",
      "Performed a parametric sweep over eight CO₂ partial pressures and three temperatures."
    ],
    "engineering": [
      "Diffusion-layer thickness: 50 µm.",
      "CO₂ partial-pressure sweep: 0.01, 0.1, 0.5, 1.0, 1.5, 2.0, 2.5 and 3.0 bar.",
      "Temperatures: 293.15 K (20 °C), 323.15 K (50 °C) and 353.15 K (80 °C).",
      "Outputs include corrosion rate, electrolyte potential, local pH/species concentrations and electrochemical response."
    ],
    "results": [
      "At ~3 bar CO₂: ~0.5 mm/y at 20 °C.",
      "At ~3 bar CO₂: ~1.3 mm/y at 50 °C.",
      "At ~3 bar CO₂: ~2.6–2.7 mm/y at 80 °C.",
      "The parametric study demonstrates strong coupling between temperature, CO₂ chemistry, transport and electrochemical kinetics."
    ],
    "tools": [
      "COMSOL Multiphysics 6.3",
      "Tertiary Current Distribution",
      "Nernst–Planck",
      "Parametric Sweep",
      "Electrochemical kinetics"
    ],
    "future": "The model can be extended with FeCO₃ scale precipitation, fluid shear/mass-transfer correlations, chloride/salinity effects, pipeline hydrodynamics and validation against laboratory corrosion measurements."
  },
  {
    "id": "oil",
    "number": "07",
    "title": "Oil Degradation & Condition Monitoring",
    "subtitle": "Large-scale multi-sensor machine-learning workflow for predicting an Oil Degradation Index while screening target leakage and reporting prediction uncertainty.",
    "category": "ai",
    "filters": [
      "ai"
    ],
    "tags": [
      "MLP",
      "Predictive Maintenance",
      "Sensor Data",
      "Uncertainty"
    ],
    "image": "assets/img/oil-hero.webp",
    "metrics": [
      [
        "258,646",
        "Observations"
      ],
      [
        "0.940",
        "Test R²"
      ],
      [
        "0.85",
        "Test RMSE"
      ]
    ],
    "overview": "This project develops a data-driven framework for estimating lubricant degradation from heterogeneous oil-condition monitoring data. Instead of interpreting viscosity, density, moisture, particles, temperature and dielectric response independently, the model learns their combined nonlinear relationship with an Oil Degradation Index and provides an additional uncertainty indicator.",
    "challenge": "Lubricant degradation is multivariable and sensor datasets are rarely clean. Missing observations, anomalous readings, different numerical scales and target-derived variables can distort a model. A particularly important part of the project was identifying oil-health parameters that may be directly involved in calculating the target and therefore could introduce target leakage if used naively as predictors.",
    "build": "I consolidated approximately 258,646 observations with 19 recorded variables, assessed data completeness and anomalous values, grouped features by engineering meaning, screened leakage-prone variables, prepared the numerical predictors and trained an MLP regression model. Performance was assessed on training and test data, while an uncertainty estimate was retained alongside the predicted degradation index.",
    "outcome": "The reported model achieved train R² ≈ 0.955 with RMSE ≈ 0.77 and test R² ≈ 0.940 with RMSE ≈ 0.85, indicating a relatively small performance drop under the documented evaluation procedure. A mean uncertainty of about 0.658 was also reported, enabling predictions to be interpreted together with a confidence-related indicator.",
    "methodology": [
      "Structured multi-sensor measurements covering humidity/moisture, oil flow, temperatures, ISO cleanliness, particle counts, viscosity, density, dielectric response and oil-health indicators.",
      "Audited missing data, extreme values, inconsistent records and feature scales before modelling.",
      "Identified oh_parama / oh_paramb / oh_paramc as potential target-leakage risks because they are described as parameters involved in calculating degradation.",
      "Organized features into moisture/operating conditions, contamination/cleanliness, rheology, physicochemical properties and thermal condition.",
      "Used a Multilayer Perceptron to model nonlinear interactions between the selected condition indicators.",
      "Compared train and test metrics and retained a prediction-uncertainty value for model interpretation."
    ],
    "engineering": [
      "Dataset scale: ~258,646 observations and 19 recorded variables including the degradation index.",
      "Raw data contain meaningful missingness in several measurements, making quality control a core part of the workflow.",
      "Predictive-maintenance deployment requires careful temporal or independent validation, not only random splits.",
      "The framework is designed to combine heterogeneous sensor signals into one interpretable degradation estimate."
    ],
    "results": [
      "Train performance: R² ≈ 0.955, RMSE ≈ 0.77.",
      "Test performance: R² ≈ 0.940, RMSE ≈ 0.85.",
      "Reported mean uncertainty: ≈0.658.",
      "The limited train–test gap suggests consistent behaviour under the documented split, while future industrial validation should use a separate machine, oil batch or operating period."
    ],
    "tools": [
      "Python",
      "MLP regression",
      "Industrial condition-monitoring data",
      "Data-quality analysis",
      "Uncertainty assessment"
    ],
    "future": "A stronger industrial deployment would add time-aware validation, independent machine/oil-batch testing, drift monitoring, feature attribution and calibrated alert thresholds for maintenance decisions."
  },
  {
    "id": "distillation",
    "number": "08",
    "title": "Distillation Vapour-Pressure ML Platform",
    "subtitle": "Interactive Python/Streamlit engineering application that deploys an ONNX linear-regression model to predict vapour pressure from 17 distillation operating variables.",
    "category": "ai",
    "filters": [
      "ai",
      "process"
    ],
    "tags": [
      "Python",
      "Streamlit",
      "ONNX",
      "Distillation"
    ],
    "image": "assets/img/distillation-poster.jpg",
    "poster": "assets/img/distillation-poster.jpg",
    "video": "assets/video/distillation-ml.mp4",
    "metrics": [
      [
        "253",
        "Observations"
      ],
      [
        "17",
        "Process inputs"
      ],
      [
        "≈0.95",
        "R² on available dataset"
      ]
    ],
    "overview": "The project converts historical distillation-column operating data into a lightweight predictive application. The goal is not to replace rigorous thermodynamic VLE calculations; instead, it demonstrates how a statistical relationship embedded in plant-like operating variables can be packaged into a fast engineering estimator with visual context.",
    "challenge": "The dataset contains multiple temperature, flow, pressure-related and controller measurements that vary together and are strongly correlated. A user needs more than a raw regression coefficient table: the model should accept operating inputs, produce a prediction immediately and show those inputs in the context of the distillation column.",
    "build": "I analysed a 253-row dataset containing 17 process variables and one VapourPressure target, developed a linear regression model, exported it to ONNX and integrated it into a Streamlit application. The interface allows users to modify operating variables, view the predicted vapour pressure, inspect a 2D column schematic and compare the current temperature profile with a reference profile.",
    "outcome": "When evaluated over the available dataset, the exported model reports approximately R² = 0.95, MAE = 1.05 and RMSE = 1.53. The ONNX deployment removes the need to retrain the model when the app launches, and the interface demonstrates real-time prediction changes as the user modifies operating conditions.",
    "methodology": [
      "Analysed ranges, means, standard deviations, correlations and relationships between 17 inputs and the vapour-pressure target.",
      "Recognized that several temperature variables are strongly predictive but also correlated with one another.",
      "Trained a linear regressor and exported the fitted coefficients/intercept to ONNX format.",
      "Built a Streamlit interface that collects user inputs and passes them directly to the ONNX model.",
      "Added a column schematic and temperature-profile visualization to communicate the operating condition around the numerical prediction.",
      "Included a reference temperature profile and a temperature-spread diagnostic as application-level interpretation aids."
    ],
    "engineering": [
      "Dataset: 253 observations, 17 numerical process inputs and one VapourPressure target.",
      "Exported ONNX model contains 17 coefficients, one intercept and one predicted output.",
      "The application separates the data-driven estimator from rigorous thermodynamic equations such as Antoine/Raoult/EOS calculations.",
      "Demonstrated conditions produced example predictions around 58.10 and 48.33 as operating inputs were changed."
    ],
    "results": [
      "R² ≈ 0.95 on the available dataset.",
      "MAE ≈ 1.05.",
      "RMSE ≈ 1.53.",
      "Model inference is packaged into a visual application, turning a static regression into a usable engineering interface."
    ],
    "tools": [
      "Python",
      "Streamlit",
      "ONNX",
      "Linear Regression",
      "Interactive visualization"
    ],
    "future": "The next validation step is a clearly separated test or time-based dataset, followed by comparison against thermodynamic calculations and possible deployment with real process tags or digital-twin data.",
    "note": "The reported metrics are performance over the available dataset; the source documentation does not establish a separately documented independent test dataset."
  },
  {
    "id": "hda",
    "number": "09",
    "title": "Toluene Alkylation",
    "subtitle": "COMSOL reaction-engineering study of a non-isothermal toluene reactor, using distributed hydrogen delivery through a membrane to compare reaction behaviour against a conventional plug-flow configuration.",
    "category": "multiphysics",
    "filters": [
      "multiphysics",
      "process"
    ],
    "tags": [
      "COMSOL",
      "Toluene",
      "Reaction Engineering",
      "Membrane Reactor"
    ],
    "image": "assets/img/toluene-alkylation-reaction.png",
    "poster": "assets/img/toluene-alkylation-reaction.png",
    "video": "assets/video/hda-membrane-reactor.mp4",
    "metrics": [
      [
        "1200 K",
        "Reference inlet T"
      ],
      [
        "2 atm",
        "Reactor pressure"
      ],
      [
        "50.66 kPa",
        "Membrane Δp"
      ]
    ],
    "overview": "The underlying COMSOL model studies toluene hydrodealkylation to benzene in a non-isothermal gas-phase plug-flow reactor and compares two hydrogen-delivery strategies: conventional inlet-only feeding and continuous addition through a hydrogen-permeable membrane. The portfolio uses the requested 'Toluene Alkylation' title and reaction cover image, while the technical case study describes the hydrodealkylation model contained in the source project.",
    "challenge": "Hydrogen is consumed by the desired hydrodealkylation reaction and also influences the reversible secondary pathway associated with biphenyl formation. Introducing all hydrogen at the inlet creates a different concentration profile from distributing it along the reactor. The engineering question is whether spatial control of hydrogen availability can improve conversion/selectivity behaviour without confusing the effect of distribution with simply adding more hydrogen.",
    "build": "I modelled a five-species, gas-phase, non-isothermal plug-flow reactor in COMSOL using the Soave–Redlich–Kwong equation of state. Reaction kinetics, thermodynamics and energy balance are solved together so temperature affects the Arrhenius rates and reaction heat feeds back into temperature. A membrane case adds hydrogen continuously through the reactor wall based on a shell-to-reactor pressure difference.",
    "outcome": "The framework produces species-flow, concentration, reaction-rate and temperature profiles as functions of reactor volume. It also defines engineering indicators for toluene conversion, benzene yield/selectivity, biphenyl formation and total hydrogen utilization. The project demonstrates a process-intensification concept in which reaction and selective reactant transport are integrated in the same device.",
    "methodology": [
      "Modelled the main reaction C₇H₈ + H₂ → C₆H₆ + CH₄ and a reversible benzene/biphenyl secondary pathway.",
      "Used a non-isothermal plug-flow formulation with reactor volume as the independent coordinate.",
      "Calculated mixture thermodynamic properties with the Soave–Redlich–Kwong equation of state.",
      "Coupled Arrhenius kinetics and energy balance so reaction rate and temperature evolve together.",
      "Added a distributed membrane hydrogen source driven by the shell-to-reactor pressure difference.",
      "Defined fair-comparison metrics that account for total hydrogen supplied to the conventional and membrane configurations."
    ],
    "engineering": [
      "Reference inlet temperature: ~1200 K.",
      "Reactor pressure: ~2 atm in the documented setup.",
      "Membrane driving pressure difference: ~50.66 kPa.",
      "Outputs include toluene conversion, benzene yield/selectivity, biphenyl formation, hydrogen concentration/utilization and temperature profiles."
    ],
    "results": [
      "The model enables direct comparison of inlet-only versus distributed hydrogen delivery.",
      "Distributed feeding changes the local hydrogen environment as the reaction proceeds, creating an additional process-control degree of freedom.",
      "The plug-flow formulation is computationally efficient for kinetics, sensitivity and optimization studies.",
      "The source model is a reaction-engineering model and does not explicitly resolve detailed 2D/3D membrane-pore or shell-side hydrodynamics."
    ],
    "tools": [
      "COMSOL Multiphysics",
      "Reaction Engineering",
      "SRK thermodynamics",
      "Non-isothermal PFR",
      "Membrane mass transfer"
    ],
    "future": "The next fidelity level would add 2D/3D transport, detailed membrane permeation, shell-side hydrodynamics and optimization under equal total hydrogen input.",
    "note": "The source project is hydrodealkylation; the displayed title and alkylation reaction cover are kept because you explicitly requested that portfolio presentation."
  },
  {
    "id": "methane-co2-carbon",
    "number": "10",
    "title": "Catalytic Methane–CO₂ Conversion to Syngas & Graphene/Carbon",
    "subtitle": "COMSOL reactor-model workflow for dry reforming and carbon formation, structured as a physics-based evaluator for catalyst and operating-condition screening.",
    "category": "multiphysics",
    "filters": [
      "multiphysics",
      "process",
      "materials"
    ],
    "tags": [
      "COMSOL",
      "Dry Reforming",
      "Syngas",
      "Carbon Materials",
      "Catalyst Screening"
    ],
    "image": "assets/img/methane-co2-reactor.png",
    "metrics": [
      [
        "CH₄ + CO₂",
        "Reaction feed"
      ],
      [
        "Syngas + C",
        "Target products"
      ],
      [
        "COMSOL",
        "Reactor evaluator"
      ]
    ],
    "overview": "This project investigates catalytic conversion of methane and carbon dioxide toward syngas while also considering solid-carbon formation with graphene/carbon-oriented output. The purpose is to move beyond a simple equilibrium calculation by using a COMSOL reactor model that couples reaction behaviour with transport and thermal effects and can be reused as an evaluator for comparing catalyst and operating-condition choices.",
    "challenge": "Methane–CO₂ conversion involves competing engineering objectives. High gas-phase conversion and syngas production must be considered together with carbon formation, heat demand and catalyst-dependent behaviour. A useful model therefore needs to preserve the physical coupling between reaction kinetics, heat transfer, mass transport and catalyst state rather than treating catalyst selection as an isolated categorical label.",
    "build": "I developed a COMSOL reactor model for dry reforming and carbon formation and structured the simulation so catalyst compositions and operating conditions can be changed systematically. The model couples transport, reaction kinetics and thermal behaviour, then returns engineering outputs that can be compared across cases. This creates the foundation for simulator-driven catalyst screening rather than relying only on trial-and-error experiments.",
    "outcome": "The workflow supports comparative evaluation of conditions that favour syngas production while monitoring solid-carbon/graphene-oriented output. Its main portfolio value is the evaluator architecture: a physics-based COMSOL model can be linked later to DOE, active-learning or optimization methods so expensive simulation calls are concentrated in the most informative regions of the design space.",
    "methodology": [
      "Defined the reacting methane–CO₂ system and catalytic reactor domain in COMSOL.",
      "Coupled reaction kinetics with heat and mass transport so temperature and concentration changes influence reaction behaviour.",
      "Included solid-carbon formation as an explicit performance dimension rather than treating it only as an unmodelled side effect.",
      "Structured catalyst-dependent parameters and operating conditions so multiple candidate configurations can be compared using the same evaluator.",
      "Extracted output quantities suitable for ranking cases by syngas and carbon-oriented performance."
    ],
    "engineering": [
      "Main feed variables are methane and CO₂ conditions together with catalyst-dependent properties and reactor operating conditions.",
      "Primary outputs are gas-phase conversion/syngas indicators, carbon formation and thermal/reactor behaviour.",
      "The same simulator structure can support catalyst composition screening and later closed-loop optimization.",
      "The project bridges reaction engineering, materials development and scientific optimization."
    ],
    "results": [
      "The model provides a repeatable evaluator for comparing catalyst and operating-condition combinations.",
      "It creates a physics-based pathway for reducing experimental search space before higher-cost validation.",
      "The project is positioned as an R&D screening and optimization foundation; no unsupported final catalyst-performance claim is presented in the portfolio."
    ],
    "tools": [
      "COMSOL Multiphysics",
      "Reaction engineering",
      "Heat & mass transport",
      "Catalyst screening",
      "Scientific optimization-ready workflow"
    ],
    "future": "The evaluator can be connected to DOE/RSM, Bayesian optimization or active learning, then validated against experimental methane conversion, H₂/CO ratio, carbon yield and carbon-structure characterization."
  },
  {
    "id": "co2-battery",
    "number": "11",
    "title": "CO₂ Battery & Packed-Bed Thermal Energy Storage",
    "subtitle": "Integrated 10 MW / 60 MWh long-duration energy-storage project combining Aspen Plus thermodynamics, COMSOL packed-bed TES, PIPESIM/OLGA flow assurance and AutoCAD Plant 3D process design.",
    "category": "process",
    "filters": [
      "process",
      "multiphysics"
    ],
    "tags": [
      "Aspen Plus",
      "COMSOL",
      "PIPESIM / OLGA",
      "Plant 3D",
      "Energy Storage"
    ],
    "image": "assets/img/co2-battery-plant.webp",
    "featured": true,
    "metrics": [
      [
        "10 MW / 60 MWh",
        "Target system"
      ],
      [
        "≈69.3%",
        "Optimized RTE"
      ],
      [
        "~6 h",
        "Storage duration"
      ]
    ],
    "overview": "This project develops a complete engineering workflow for a long-duration CO₂ Battery intended to store variable renewable electricity. The system is rated at approximately 10 MW / 60 MWh for about six hours of storage and follows the cycle from gaseous CO₂ compression and heat recovery through liquefaction/storage, high-pressure liquid pumping, thermal re-heating and turbine expansion. The work extends beyond thermodynamic simulation into packed-bed thermal storage, hydraulic analysis, transient flow assurance, PFD/P&ID development and preliminary plant layout.",
    "challenge": "A practical CO₂ Battery must manage large pressure changes, gas/liquid phase transitions, compression heat, thermal-storage utilization, hydraulic losses and dynamic charge/discharge transitions. It is not enough to show that the thermodynamic cycle closes: compressors, pumps, heat exchangers, storage vessels, TES, turbines, pipelines, valves and control instrumentation must be treated as one integrated engineering system.",
    "build": "I modelled the complete charge and discharge cycle in Aspen Plus, including multi-stage compression, intercooling, condensation, liquid CO₂ storage, high-pressure pumping, thermal recovery, evaporation/heating and turbine expansion. A dedicated COMSOL packed-bed TES model resolves transient CO₂–solid heat transfer and thermal-front propagation. PIPESIM was used for steady-state hydraulics, OLGA for dynamic/transient transport scenarios, and AutoCAD Plant 3D for PFD, P&ID, instrumentation and preliminary spatial layout.",
    "outcome": "The optimized Aspen Plus case reached approximately 69.3% round-trip efficiency, within the investigated 65–70% target range. The discharge turbine train was configured for approximately 10 MW combined electrical output. The integrated workflow links process concept, thermodynamic design, TES behaviour, flow assurance and plant engineering, providing a basis for later equipment sizing, HAZOP/HAZID, techno-economics, renewable integration and digital-twin/AI optimization.",
    "methodology": [
      "Charge cycle: CO₂ dome/gas storage → multi-stage compression → intercooling and heat recovery → thermal-energy storage → condensation/liquefaction → liquid CO₂ storage.",
      "Discharge cycle: liquid CO₂ storage → high-pressure pump → heating/evaporation using stored heat → turbine expansion → generator → return to CO₂ dome.",
      "Calculated compressor power, pump power, heat-exchanger duties, turbine generation, enthalpy, vapor fraction and phase behaviour in Aspen Plus.",
      "Built a transient packed-bed TES model in COMSOL to track temperature distribution, thermal-front movement, convective heat transfer and storage utilization.",
      "Used PIPESIM to evaluate CO₂ network pressure losses, velocity, pipe diameter/length, elevation and density effects under steady operation.",
      "Used OLGA to investigate start-up, charge/discharge transitions, flow-rate changes, pressure transients and possible dynamic phase changes.",
      "Translated the process into PFD/P&ID and preliminary Plant 3D layout including equipment, piping, valves, measurement and control concepts."
    ],
    "engineering": [
      "Charging flow: ~200,000 kg/h CO₂.",
      "Discharging flow: ~170,000 kg/h CO₂.",
      "High-pressure operation reaches approximately 85–110 bar; liquid CO₂ is pumped to around 110 bar during discharge.",
      "Packed-bed TES hot-side temperature reaches approximately 180 °C in the documented design.",
      "Turbine stages are configured for ~10 MW combined output.",
      "Instrumentation concepts include PT, TT, FT, LT plus PCV/FCV/TCV loops around the major equipment and storage sections."
    ],
    "results": [
      "Optimized round-trip efficiency: ~69.3%.",
      "Target energy rating: 10 MW / 60 MWh for ~6 hours.",
      "Compression heat is recovered into TES rather than being fully rejected, then returned to the high-pressure CO₂ before turbine expansion.",
      "The multi-software workflow bridges ideal thermodynamic modelling with thermal storage, piping hydraulics, dynamic flow assurance and process/plant engineering."
    ],
    "tools": [
      "Aspen Plus",
      "COMSOL Multiphysics",
      "PIPESIM",
      "OLGA",
      "AutoCAD Plant 3D",
      "PFD / P&ID"
    ],
    "future": "The documented framework is ready for further development through PV integration, techno-economic analysis and LCOS/LCOE, detailed equipment sizing, HAZOP/HAZID, control-system design, optimization, digital-twin implementation and AI-assisted operation."
  },
  {
    "id": "solarinc",
    "number": "12",
    "title": "Solarinc — AI-Powered Solar Digital Twin",
    "subtitle": "Intelligent solar-energy monitoring and optimization platform combining AI, digital twins, IoT telemetry, computer vision and predictive analytics for photovoltaic assets.",
    "category": "ai",
    "filters": [
      "ai",
      "multiphysics"
    ],
    "tags": [
      "Solar Digital Twin",
      "AI / ML",
      "IoT",
      "Computer Vision",
      "Predictive Analytics"
    ],
    "image": "assets/img/solarinc-hero.png",
    "poster": "assets/img/solarinc-hero.png",
    "video": "assets/video/solarinc-demo.mp4",
    "videoFit": "contain",
    "featured": false,
    "metrics": [
      [
        "AI + IoT",
        "Integrated intelligence"
      ],
      [
        "Digital Twin",
        "PV system model"
      ],
      [
        "Predictive",
        "Asset management"
      ]
    ],
    "overview": "Solarinc is an intelligent solar-energy monitoring and optimization platform designed to improve the operational performance, reliability and efficiency of photovoltaic systems. It moves beyond conventional monitoring by comparing environmental conditions, equipment behaviour, historical performance and real-time measurements with expected system behaviour to identify losses, detect abnormal operation and support maintenance decisions.",
    "challenge": "Photovoltaic performance is affected by interacting environmental and operational factors including irradiance, temperature, dust and soiling, tracker position, weather, degradation and equipment anomalies. In hot and arid regions these effects can change rapidly, so operators need more than a production dashboard: they need a system that can locate a problem, estimate its severity and energy impact, and recommend the next action.",
    "build": "I developed the Solarinc concept as an integrated AI and solar digital-twin platform. The workflow combines IoT measurements, environmental and electrical variables, a controllable 3D PV-system representation, machine-learning analytics, visual inspection data and smart-tracker analysis. The interface organizes asset intelligence, forecast intelligence, storage intelligence and digital-twin control into a single engineering environment.",
    "outcome": "The platform creates a foundation for predictive solar-asset management. It is designed to forecast energy yield, compare expected and actual performance, identify abnormal behaviour, assess degradation and tracker inefficiency, and translate raw telemetry into actionable engineering information for operators, engineers, maintenance teams and energy managers.",
    "methodology": [
      "Collect operational and environmental variables including irradiance, ambient/module temperature, weather, panel orientation, tracker angles, electrical production and historical performance indicators.",
      "Combine IoT telemetry with a digital-twin representation of the photovoltaic system and compare measured behaviour against expected operating behaviour.",
      "Apply machine-learning workflows for yield forecasting, performance prediction, anomaly detection, degradation analysis and tracker-performance evaluation.",
      "Use computer-vision and image-analysis inputs to complement sensor-based monitoring and support visible-defect or abnormal-condition screening.",
      "Estimate the location, severity and energy impact of detected performance deviations before presenting decision-support information.",
      "Evaluate solar position, irradiance, weather and tracker orientation to support improved energy capture throughout the day."
    ],
    "engineering": [
      "Primary inputs include solar irradiance, temperature, humidity/weather, production telemetry, servo/tracker position and historical performance data.",
      "The 3D digital-twin interface supports scene controls, telemetry simulation, capture/export and synthetic-dataset generation.",
      "Target fault and loss modes include dust/soiling, thermal losses, overheating, abnormal power production, degradation, tracker-position errors and equipment anomalies.",
      "The physical prototype demonstrates a compact solar panel with tracking hardware, sensors, control electronics and connected data acquisition.",
      "The platform is particularly relevant to hot and arid operating environments affected by high temperature, dust and sandstorms."
    ],
    "results": [
      "Unifies monitoring, prediction, anomaly detection and digital-twin control in one solar-asset workflow.",
      "Supports a transition from reactive maintenance toward predictive, data-driven maintenance planning.",
      "Provides a structured path from detected deviation to estimated loss, likely cause and recommended engineering action.",
      "Connects a physical solar-tracking prototype with a software environment for future validation, forecasting and optimization studies."
    ],
    "tools": [
      "Artificial Intelligence / Machine Learning",
      "Digital Twins",
      "IoT telemetry",
      "Computer Vision",
      "Predictive Analytics",
      "Smart Solar Tracking",
      "3D visualization"
    ],
    "future": "Next development should connect longer-term field data to the digital twin, validate forecasting and fault-detection performance against labelled operating events, quantify recoverable energy and maintenance savings, and evaluate the system under representative hot, dusty and variable-weather conditions.",
    "note": "The portfolio presents the Solarinc platform architecture and prototype. Production-scale performance, fault-detection accuracy and quantified energy or cost savings require field deployment and validation.",
    "links": [
      {
        "label": "Visit the Solarinc YouTube channel",
        "url": "https://www.youtube.com/channel/UCumgfVBYbT2C--e2d4pnZiA"
      }
    ]
  }
];


const featuredEl = document.querySelector('#featuredProjects');
const gridEl = document.querySelector('#projectGrid');
const dialog = document.querySelector('#caseDialog');
const dialogContent = document.querySelector('#dialogContent');
const closeButton = document.querySelector('#dialogClose');

function cardTemplate(project, featured = false) {
  const demo = project.video ? '<span class="demo-badge"><span aria-hidden="true">▶</span> Demo</span>' : '';
  const cardClass = featured ? 'project-card project-card--featured reveal' : 'project-card reveal';
  const cardNumber = featured ? `Featured / ${project.number}` : project.number;
  return `
    <article class="${cardClass}" data-project="${project.id}" data-category="${project.filters.join(' ')}">
      <span class="card-index">${cardNumber}</span>
      ${demo}
      <img src="${project.image}" alt="${project.title} project visual" loading="lazy" />
      <div class="card-open" aria-hidden="true">↗</div>
      <div class="card-content">
        <div class="card-meta">${project.tags.slice(0, 3).map(t => `<span>${t}</span>`).join('')}</div>
        <h3>${project.title}</h3>
        <p>${project.subtitle}</p>
        <span class="card-read">View case study <span aria-hidden="true">↗</span></span>
      </div>
      <button class="card-button" aria-label="Open case study: ${project.title}" data-open-project="${project.id}"></button>
    </article>`;
}

featuredEl.innerHTML = projects.filter(p => p.featured).map(p => cardTemplate(p, true)).join('');
gridEl.innerHTML = projects.map(p => cardTemplate(p, false)).join('');

function listTemplate(items) {
  if (!items || !items.length) return '';
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function detailBlock(title, items, className = '') {
  if (!items || !items.length) return '';
  return `<section class="detail-block ${className}">
    <h3>${title}</h3>
    ${listTemplate(items)}
  </section>`;
}

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  const media = p.video
    ? `<video${p.videoFit === 'contain' ? ' class="is-contain"' : ''} controls playsinline preload="metadata" poster="${p.poster || p.image}"><source src="${p.video}" type="video/mp4">Your browser does not support the video element.</video>`
    : `<img src="${p.image}" alt="${p.title} project visual" />`;

  dialogContent.innerHTML = `
    <div class="dialog-media">${media}</div>
    <div class="dialog-body">
      <div class="dialog-head">
        <div>
          <span class="kicker">Case study / ${p.number}</span>
          <h2 id="caseTitle">${p.title}</h2>
          <div class="dialog-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
        <p class="dialog-summary">${p.subtitle}</p>
      </div>

      <div class="metric-grid">
        ${p.metrics.map(([value,label]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`).join('')}
      </div>

      <section class="case-overview">
        <span class="kicker">Project overview</span>
        <p>${p.overview}</p>
        ${p.links?.length ? `<div class="project-links">${p.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.label} <span aria-hidden="true">↗</span></a>`).join('')}</div>` : ''}
      </section>

      ${p.caseImage ? `<figure class="case-figure">
        <img src="${p.caseImage}" alt="${p.caseImageAlt || p.title}" loading="lazy" />
        ${p.caseImageCaption ? `<figcaption>${p.caseImageCaption}</figcaption>` : ''}
      </figure>` : ''}

      <div class="case-sections">
        <section><h3>Engineering challenge</h3><p>${p.challenge}</p></section>
        <section><h3>What I built</h3><p>${p.build}</p></section>
        <section><h3>Outcome / insight</h3><p>${p.outcome}</p></section>
      </div>

      <div class="deep-dive-head">
        <span class="kicker">Technical deep dive</span>
        <h3>Method, model scope and engineering evidence</h3>
      </div>

      <div class="case-detail-grid">
        ${detailBlock('Methodology & workflow', p.methodology)}
        ${detailBlock('Engineering configuration', p.engineering)}
        ${detailBlock('Key results & insights', p.results)}
        ${detailBlock('Software & deliverables', p.tools)}
      </div>

      ${p.future ? `<section class="future-block"><h3>Next development</h3><p>${p.future}</p></section>` : ''}
      ${p.note ? `<div class="case-note"><strong>Validation / scope note</strong><span>${p.note}</span></div>` : ''}
    </div>`;
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}

function closeDialog() {
  const vid = dialog.querySelector('video');
  if (vid) vid.pause();
  dialog.close();
  document.body.style.overflow = '';
}

document.addEventListener('click', e => {
  const opener = e.target.closest('[data-open-project]');
  if (opener) openProject(opener.dataset.openProject);
});
closeButton.addEventListener('click', closeDialog);
dialog.addEventListener('click', e => { if (e.target === dialog) closeDialog(); });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });

const filterButtons = [...document.querySelectorAll('.filter')];
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  const filter = btn.dataset.filter;
  [...gridEl.children].forEach(card => {
    const show = filter === 'all' || card.dataset.category.split(' ').includes(filter);
    card.classList.toggle('is-hidden', !show);
  });
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.11, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  window.addEventListener('pointermove', event => {
    document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
    document.documentElement.style.setProperty('--my', `${event.clientY}px`);
    document.documentElement.style.setProperty('--cursor-opacity', '.72');
  }, { passive: true });
  document.documentElement.addEventListener('mouseleave', () => {
    document.documentElement.style.setProperty('--cursor-opacity', '0');
  });
  document.documentElement.addEventListener('mouseenter', () => {
    document.documentElement.style.setProperty('--cursor-opacity', '.72');
  });
}
