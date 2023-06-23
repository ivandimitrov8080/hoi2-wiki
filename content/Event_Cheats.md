---
title: "Event_Cheats"
---

[TABLE]

  
For those of you who don't mind cheating, Here's a little event to help
give your country a little "Boost". Be warned, This will produce
multiplayer compatability errors and might be overwritten upon updating
to a new patch.

    event = {
        id = 3299
        random = no

        name = "Hoi2 Wiki Cheat Event!"
        desc = "Praise be to the Wiki! For it shall cleanse our souls and give us the ability to wage war!"
        style = 0

        action_a = {
            name = "It's Rafikilicious"
            # As of 1.2, It's even easier to create cheating events. 
            # Just add this to an event file and fire it manually as many times as you want.
            command = { type = free_ic value = 100 } #+100 offmap IC production
            command = { type = free_energy value = 250 } #Free offmap resource production
            command = { type = free_metal value = 120 }
            command = { type = free_oil value = 50 }
            command = { type = free_rare_materials value = 75 }
            command = { type = construct which = infrastructure where = -1 value = 100 } #Free Infra to 5 random provinces
            command = { type = construct which = infrastructure where = -1 value = 100 }
            command = { type = construct which = infrastructure where = -1 value = 100 }
            command = { type = construct which = infrastructure where = -1 value = 100 }
            command = { type = construct which = infrastructure where = -1 value = 100 }
            command = { type = supplies value = 5000 } # Free stuff
            command = { type = oilpool value = 5000 }
            command = { type = metalpool value = 5000 }
            command = { type = energypool value = 5000 }
            command = { type = rarematerialspool value = 5000 }
            command = { type = manpowerpool value = 5000 }
            command = { type = money value = 5000 }
            command = { type = research_mod value = 5000 } #Quicker Research
            }
    }

Here's some more cheats! Remember to check if the event ID:s are unused.

    #########################################################################
    # Cheats, written by A Swede
    #########################################################################
    # 80000 - 80099 Military doctrines, -modifiers etc.
    # 80100 - 80199 Industrial, production, resource, TC etc.
    # 80200 - 80299 Misc.
    #
    #
    #########################################################################

    event = {
        id = 80000
        random = yes

        name = "Repair"
        desc = "Our engineers have developed better methods for repairs."
        picture = "coastal_fort"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = repair_mod value = 10 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80001
        random = yes

        name = "Command Efficiency"
        desc = "Our generals have developed better methods for leading and managing our armies."
        picture = "ger_surrender"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = speed which = hq value = 2 }
            command = { type = hq_supply_eff value = 2 }
            command = { type = sce_frequency value = 0.5 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80002
        random = yes

        name = "New Tactical Methods"
        desc = "Our generals have developed new ideas and principles on tactics."
        picture = "german_reinforcment_5"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = ambush value = 10 }
            command = { type = breakthrough value = 30 }
            command = { type = encirclement value = 10 }
            command = { type = tactical_withdrawal value = 30 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80003
        random = yes

        name = "Generals establish new defensive tactics"
        desc = "Our most skilled generals have developed new methods and principles which will greatly improve our armies defensive capabilities."
        picture = "german_reinforcment_5"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = ground_def_eff value = 1.0 }
            command = { type = counterattack value = 30 }
            command = { type = tactical_withdrawal value = 30 }
            command = { type = surprise which = land value = 75 }
            command = { type = army_detection which = them value = -40 }
            command = { type = intelligence which = us value = 75 }
            command = { type = army_detection which = us value = 75 }
            
            command = { type = night_defense which = infantry value = 80 }
            command = { type = night_defense which = paratrooper value = 80 }
            command = { type = night_defense which = marine value = 80 }
            command = { type = night_defense which = bergsjaeger value = 80 }
            command = { type = night_defense which = armor value = 80 }
            command = { type = night_defense which = militia value = 80 }
            command = { type = night_defense which = garrison value = 80 }
            command = { type = night_defense which = motorized value = 80 }
            command = { type = night_defense which = mechanized value = 80 }
            
            command = { type = hill_defense which = infantry value = 40 }
            command = { type = hill_defense which = paratrooper value = 40 }
            command = { type = hill_defense which = marine value = 40 }
            command = { type = hill_defense which = bergsjaeger value = 40 }
            command = { type = hill_defense which = armor value = 40 }
            command = { type = hill_defense which = militia value = 40 }
            command = { type = hill_defense which = garrison value = 40 }
            command = { type = hill_defense which = motorized value = 40 }
            command = { type = hill_defense which = mechanized value = 40 }
            
            command = { type = forest_defense which = infantry value = 40 }
            command = { type = forest_defense which = paratrooper value = 40 }
            command = { type = forest_defense which = marine value = 40 }
            command = { type = forest_defense which = bergsjaeger value = 40 }
            command = { type = forest_defense which = armor value = 40 }
            command = { type = forest_defense which = militia value = 40 }
            command = { type = forest_defense which = garrison value = 40 }
            command = { type = forest_defense which = motorized value = 40 }
            command = { type = forest_defense which = mechanized value = 40 }
            
        }

        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80004
        random = yes

        name = "Military geniuses"
        desc = "We've recently discovered some military geniuses among the officer corps!"
        picture = "coastal_fort"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }
            command = { type = set_leader_skill which = -1 value = 9 }

        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }


    #command = { type = speed_cap_art which = infantry value = 1 }
    #command = { type = speed_cap_art which = paratrooper value = 1 }
    #command = { type = speed_cap_art which = marine value = 1 }
    #command = { type = speed_cap_art which = bergsjaeger value = 1 }
    #command = { type = speed_cap_art which = motorized value = 1 }

    #########################################################################
    #80100 - 80199 Industrial, production, resource, etc.
    #########################################################################

    event = {
        id = 80100
        random = yes

        name = "Great Industrial Leap"
        desc = "We are ready to take measures and expand our nations industry greatly."
        picture = "factory"
        style = 0

        action_a = {
            name = "Great Industrial Leap"
            ai_chance = 0
            command = { type = construct which = ic where = -4 value = 3 }
            command = { type = construct which = ic where = -4 value = 3 }
            command = { type = construct which = ic where = -4 value = 3 }
            command = { type = construct which = ic where = -4 value = 3 }
            command = { type = construct which = ic where = -4 value = 3 }
            command = { type = construct which = ic where = -4 value = 3 }
            command = { type = construct which = ic where = -4 value = 3 }
            command = { type = construct which = ic where = -4 value = 3 }
            command = { type = construct which = ic where = -4 value = 3 }
            command = { type = construct which = ic where = -4 value = 3 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80101
        random = yes

        name = "Advanced Industry"
        desc = "The industry of the nation will now be more efficient due to new technology"
        picture = "economy"
        style = 0

        action_a = {
            name = "Industrial Advancements"
            ai_chance = 0
            command = { type = industrial_modifier which = total value = 20 }
        }

        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80102
        random = yes

        name = "Small Arms & Vehicle Production Efficiency"
        desc = "Our engineers have shortened the production time for land divisions and material."
        picture = "german_reinforcment_4"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = build_time which = armor when = now where = relative value = -90 }
            command = { type = build_time which = light_armor when = now where = relative value = -90 }
            command = { type = build_time which = infantry when = now where = relative value = -50 }
            command = { type = build_time which = cavalry when = now where = relative value = -50 }
            command = { type = build_time which = militia when = now where = relative value = -50 }
            command = { type = build_time which = garrison when = now where = relative value = -50 }
            command = { type = build_time which = paratrooper when = now where = relative value = -70 }
            command = { type = build_time which = bergsjaeger when = now where = relative value = -70 }
            command = { type = build_time which = mechanized when = now where = relative value = -60 }
            command = { type = build_time which = motorized when = now where = relative value = -60 }
            command = { type = build_time which = hq when = now where = relative value = -80 }
            command = { type = build_time which = marine when = now where = relative value = -70 }     #Brigades below
            command = { type = build_time which = anti_tank when = now where = relative value = -50 }
            command = { type = build_time which = anti_air when = now where = relative value = -50 }
            command = { type = build_time which = artillery when = now where = relative value = -50 }
            command = { type = build_time which = rocket_artillery when = now where = relative value = -50 }
            command = { type = build_time which = police when = now where = relative value = -50 }
            command = { type = build_time which = engineer when = now where = relative value = -50 }
            command = { type = build_time which = light_armor_brigade when = now where = relative value = -50 }
            command = { type = build_time which = armored_car when = now where = relative value = -50 }
            command = { type = build_time which = heavy_armor when = now where = relative value = -100 }
            command = { type = build_time which = super_heavy_armor when = now where = relative value = -100 }
            command = { type = build_time which = tank_destroyer when = now where = relative value = -70 }
            command = { type = build_time which = sp_artillery when = now where = relative value = -70 }
            command = { type = build_time which = sp_rct_artillery when = now where = relative value = -70 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80103
        random = yes
        name = "Vehicles and small arms cost decrease"
        desc = "Our nations engineers have developed new technologies and methods to reduce the cost for vehicles and small arms"
        picture = "scientist"
        style = 0

        action_a = {
            name = "Great"
            ai_chance = 0
            command = { type = build_cost which = armor value = -10 }
            command = { type = build_cost which = light_armor value = -7 }
            command = { type = build_cost which = infantry value = -2 }
            command = { type = build_cost which = cavalry value = -5 }
            command = { type = build_cost which = paratrooper value = -5 }
            command = { type = build_cost which = bergsjaeger value = -5 }
            command = { type = build_cost which = marine value = -5 }
            command = { type = build_cost which = mechanized value = -9 }
            command = { type = build_cost which = motorized value = -8 }
            command = { type = build_cost which = hq value = -10 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80104
        random = yes

        name = "Naval Production Efficiency"
        desc = "Our engineers have shortened the production time for naval vessels"
        picture = "american_ships_in_dock"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = build_time which = battlecruiser when = now where = relative value = -70 }
            command = { type = build_time which = battleship when = now where = relative value = -80 }
            command = { type = build_time which = carrier when = now where = relative value = -90 }
            command = { type = build_time which = escort_carrier when = now where = relative value = -80 }
            command = { type = build_time which = destroyer when = now where = relative value = -70 }
            command = { type = build_time which = heavy_cruiser when = now where = relative value = -90 }
            command = { type = build_time which = light_cruiser when = now where = relative value = -80 }
            command = { type = build_time which = submarine when = now where = relative value = -70 }
            command = { type = build_time which = nuclear_submarine when = now where = relative value = -80 }
            command = { type = build_time which = transport when = now where = relative value = -50 }
            command = { type = convoy_prod_mod which = transports value = 40 }
            command = { type = convoy_prod_mod which = escorts value = 40 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80105
        random = yes

        name = "Aircraft Production Efficiency"
        desc = "Our engineers have shortened the production time for airplanes"
        picture = "german_air_reinforcments"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = build_time which = interceptor when = now where = relative value = -60 }
            command = { type = build_time which = multi_role when = now where = relative value = -60 }
            command = { type = build_time which = escort when = now where = relative value = -60 }
            command = { type = build_time which = cas when = now where = relative value = -60 }
            command = { type = build_time which = naval_bomber when = now where = relative value = -60 }
            command = { type = build_time which = strategic_bomber when = now where = relative value = -70 }
            command = { type = build_time which = tactical_bomber when = now where = relative value = -60 }
            command = { type = build_time which = transport_plane when = now where = relative value = -80 }
            command = { type = build_time which = cag when = now where = relative value = -60 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80106
        random = yes
        name = "Aircraft cost decrease"
        desc = "Our nations engineers have developed new technologies and methods to reduce the cost for aircrafts"
        picture = "scientist"
        style = 0

        action_a = {
            name = "Great"
            ai_chance = 0
            command = { type = build_cost which = interceptor value = -4 }
            command = { type = build_cost which = multi_role value = -4 }
            command = { type = build_cost which = cas value = -2 }
            command = { type = build_cost which = naval_bomber value = -8 }
            command = { type = build_cost which = strategic_bomber value = -9 }
            command = { type = build_cost which = tactical_bomber value = -8 }
            command = { type = build_cost which = transport_plane value = -14 }
            command = { type = build_cost which = cag value = -1 }
            command = { type = build_cost which = escort value = -1 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80107
        random = yes

        name = "Construction Efficiency"
        desc = "The nations great engineers has managed to develop much more efficient construction methods."
        picture = "factory"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = building_prod_mod which = ic value = 75 }
            command = { type = building_prod_mod which = infrastructure value = 75 }
            command = { type = building_prod_mod which = rocket_test value = 75 }
            command = { type = building_prod_mod which = nuclear_reactor value = 75 }
            command = { type = building_prod_mod which = coastal_fort value = 75 }
            command = { type = building_prod_mod which = land_fort value = 75 }
            command = { type = building_prod_mod which = flak value = 75 }
            command = { type = building_prod_mod which = air_base value = 75 }
            command = { type = building_prod_mod which = naval_base value = 75 }
            command = { type = building_prod_mod which = radar_station value = 75 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }


    event = {
        id = 80108
        random = yes

        name = "Increase In Transport Capacity"
        desc = "Our efforts to increase our transport capacity have yielded results!"
        picture = "transfer"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = extra_tc value = 800 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80109
        random = yes

        name = "Better Logistics In Occupied Land."
        desc = "Our generals have developed new methods for reducing the drain of partisan activity on TC."
        picture = "transfer"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = tc_occupied_mod value = 70 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80110
        random = yes

        name = "Scientist movement"
        desc = "Our efforts to spur research have paid off!"
        picture = "scientist"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = research_mod value = 1000 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80111
        random = yes

        name = "Population Growth"
        desc = "Our efforts to spur population growth have paid off!"
        picture = "youth_movment"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = relative_manpower value = 40 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80112
        random = yes

        name = "Population Increase"
        desc = "The demographics charts looks very good indeed!"
        picture = "eastern_europe"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = province_manpower which = -3 value = 19 }
            command = { type = province_manpower which = -1 value = 18 }
            command = { type = province_manpower which = -1 value = 18 }
            command = { type = province_manpower which = -1 value = 18 }
            command = { type = province_manpower which = -1 value = 19 }
            command = { type = province_manpower which = -1 value = 18 }
            command = { type = province_manpower which = -1 value = 18 }
            command = { type = province_manpower which = -1 value = 18 }
            command = { type = province_manpower which = -1 value = 18 }
            command = { type = province_manpower which = -1 value = 19 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80113
        random = yes

        name = "Supply Production"
        desc = "Our industrialists, engineers and generals have joined forces and come up with methods for producing supplies much more efficiently!"
        picture = "american_supplies"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = industrial_modifier which = supplies value = 75 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80114
        random = yes

        name = "Resource Production"
        desc = "We've discovered completely new sources of rescources!"
        picture = "siberia"
        style = 0

        action_a = {
            name = "Excellent!"
            ai_chance = 0
            command = { type = free_energy value = 800 }
            command = { type = free_metal value = 600 }
            command = { type = free_rare_materials value = 250 }
            command = { type = free_oil value = 750 }
            command = { type = free_supplies value = 800 }
            command = { type = free_money value = 100 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }



    #########################################################################
    #80200 - 80299 Misc.
    #########################################################################

    event = {
        id = 80200
        random = yes
        name = "Dissent reduced"
        desc = "Our steps towards quelling the national dissent has been very sucessful!"
        picture = "gulag"
        style = 0

        action_a = {
            name = "Great"
            ai_chance = 0
            command = { type = dissent value = -25 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

    event = {
        id = 80201
        random = yes
        name = "Peace Conference"
        desc = "We have recently held an peace conference with all the nations concerned about peace in our part of the world. The conference was an sucess and our nation seems much less beliggerent now."
        picture = "constitutional"
        style = 0

        action_a = {
            name = "Great"
            ai_chance = 0
            command = { type = belligerence value = -25 }
        }
        action_b = {
            name = "DO NOT WANT"
            ai_chance = 100
            command = { }
        }
    }

Also one event for all Blueprints


    ##################################################  #################################
    #
    #       Blueprints
    #
    ##################################################  ###################################
    event = {
        id = 3295
        random = no
        

        name = "Theoritical Breakthrough"
        desc = "Everyone has a bright idea!"
        style = 0

        action_a = {
            name = "Patent office goes wild!"

    command = { type = gain_tech which = 1010}
    command = { type = gain_tech which = 1020}
    command = { type = gain_tech which = 1030}
    command = { type = gain_tech which = 1040}
    command = { type = gain_tech which = 1050}
    command = { type = gain_tech which = 1060}
    command = { type = gain_tech which = 1070}
    command = { type = gain_tech which = 1080}
    command = { type = gain_tech which = 1090}
    command = { type = gain_tech which = 1100}
    command = { type = gain_tech which = 1110}
    command = { type = gain_tech which = 1120}
    command = { type = gain_tech which = 1130}
    command = { type = gain_tech which = 1140}
    command = { type = gain_tech which = 1150}
    command = { type = gain_tech which = 1160}
    command = { type = gain_tech which = 1170}
    command = { type = gain_tech which = 1180}
    command = { type = gain_tech which = 1190}
    command = { type = gain_tech which = 1200}
    command = { type = gain_tech which = 1210}
    command = { type = gain_tech which = 1220}
    command = { type = gain_tech which = 1230}
    command = { type = gain_tech which = 1240}
    command = { type = gain_tech which = 1250}
    command = { type = gain_tech which = 1260}
    command = { type = gain_tech which = 1270}
    command = { type = gain_tech which = 1280}
    command = { type = gain_tech which = 1290}
    command = { type = gain_tech which = 1300}
    command = { type = gain_tech which = 1310}
    command = { type = gain_tech which = 1320}
    command = { type = gain_tech which = 1330}
    command = { type = gain_tech which = 1340}
    command = { type = gain_tech which = 1350}
    command = { type = gain_tech which = 1360}
    Command = { type = gain_tech which = 2010}
    Command = { type = gain_tech which = 2020}
    Command = { type = gain_tech which = 2030}
    Command = { type = gain_tech which = 2040}
    Command = { type = gain_tech which = 2050}
    Command = { type = gain_tech which = 2060}
    Command = { type = gain_tech which = 2070}
    Command = { type = gain_tech which = 2080}
    Command = { type = gain_tech which = 2090}
    Command = { type = gain_tech which = 2100}
    Command = { type = gain_tech which = 2110}
    Command = { type = gain_tech which = 2120}
    Command = { type = gain_tech which = 2130}
    Command = { type = gain_tech which = 2140}
    Command = { type = gain_tech which = 2150}
    Command = { type = gain_tech which = 2160}
    Command = { type = gain_tech which = 2170}
    Command = { type = gain_tech which = 2180}
    Command = { type = gain_tech which = 2190}
    Command = { type = gain_tech which = 2200}
    Command = { type = gain_tech which = 2210}
    Command = { type = gain_tech which = 2220}
    Command = { type = gain_tech which = 2230}
    Command = { type = gain_tech which = 2240}
    Command = { type = gain_tech which = 2250}
    Command = { type = gain_tech which = 2260}
    Command = { type = gain_tech which = 2270}
    Command = { type = gain_tech which = 2280}
    Command = { type = gain_tech which = 2290}
    Command = { type = gain_tech which = 2300}
    Command = { type = gain_tech which = 2310}
    Command = { type = gain_tech which = 2320}
    Command = { type = gain_tech which = 2330}
    Command = { type = gain_tech which = 2340}
    Command = { type = gain_tech which = 2350}
    Command = { type = gain_tech which = 2360}
    Command = { type = gain_tech which = 2370}
    Command = { type = gain_tech which = 2380}
    Command = { type = gain_tech which = 2390}
    Command = { type = gain_tech which = 2400}
    Command = { type = gain_tech which = 2410}
    Command = { type = gain_tech which = 2420}
    Command = { type = gain_tech which = 2430}
    Command = { type = gain_tech which = 2440}
    Command = { type = gain_tech which = 2450}
    Command = { type = gain_tech which = 2460}
    Command = { type = gain_tech which = 2470}
    Command = { type = gain_tech which = 2480}
    Command = { type = gain_tech which = 2490}
    Command = { type = gain_tech which = 2500}
    Command = { type = gain_tech which = 2510}
    Command = { type = gain_tech which = 2520}
    Command = { type = gain_tech which = 2530}
    Command = { type = gain_tech which = 2540}
    Command = { type = gain_tech which = 3010}
    Command = { type = gain_tech which = 3020}
    Command = { type = gain_tech which = 3030}
    Command = { type = gain_tech which = 3040}
    Command = { type = gain_tech which = 3050}
    Command = { type = gain_tech which = 3060}
    Command = { type = gain_tech which = 3070}
    Command = { type = gain_tech which = 3080}
    Command = { type = gain_tech which = 3090}
    Command = { type = gain_tech which = 3100}
    Command = { type = gain_tech which = 3110}
    Command = { type = gain_tech which = 3120}
    Command = { type = gain_tech which = 3130}
    Command = { type = gain_tech which = 3140}
    Command = { type = gain_tech which = 3150}
    Command = { type = gain_tech which = 3160}
    Command = { type = gain_tech which = 3170}
    Command = { type = gain_tech which = 3180}
    Command = { type = gain_tech which = 3190}
    Command = { type = gain_tech which = 3200}

    Command = { type = gain_tech which = 3210}
    Command = { type = gain_tech which = 3220}
    Command = { type = gain_tech which = 3230}
    Command = { type = gain_tech which = 3240}
    Command = { type = gain_tech which = 3250}
    Command = { type = gain_tech which = 3260}
    Command = { type = gain_tech which = 3270}
    Command = { type = gain_tech which = 3280}
    Command = { type = gain_tech which = 3290}
    Command = { type = gain_tech which = 3300}
    Command = { type = gain_tech which = 3310}
    Command = { type = gain_tech which = 3320}
    Command = { type = gain_tech which = 3330}
    Command = { type = gain_tech which = 3340}
    Command = { type = gain_tech which = 3350}
    Command = { type = gain_tech which = 3360}
    Command = { type = gain_tech which = 3370}
    Command = { type = gain_tech which = 3380}
    Command = { type = gain_tech which = 3390}
    Command = { type = gain_tech which = 3400}
    Command = { type = gain_tech which = 3410}
    Command = { type = gain_tech which = 3420}
    Command = { type = gain_tech which = 3430}
    Command = { type = gain_tech which = 3440}
    Command = { type = gain_tech which = 3450}
    Command = { type = gain_tech which = 3460}
    command = { type = gain_tech which = 4010}
    command = { type = gain_tech which = 4020}
    Command = { type = gain_tech which = 4030}
    Command = { type = gain_tech which = 4040}
    Command = { type = gain_tech which = 4050}
    Command = { type = gain_tech which = 4060}
    Command = { type = gain_tech which = 4070}
    Command = { type = gain_tech which = 4080}
    Command = { type = gain_tech which = 4090}
    Command = { type = gain_tech which = 4100}
    Command = { type = gain_tech which = 4110}
    Command = { type = gain_tech which = 4120}
    Command = { type = gain_tech which = 4130}
    Command = { type = gain_tech which = 4140}
    Command = { type = gain_tech which = 4150}
    Command = { type = gain_tech which = 4160}
    Command = { type = gain_tech which = 4170}
    Command = { type = gain_tech which = 4180}
    Command = { type = gain_tech which = 4190}
    Command = { type = gain_tech which = 4200}
    Command = { type = gain_tech which = 4210}
    Command = { type = gain_tech which = 4220}
    Command = { type = gain_tech which = 4230}
    Command = { type = gain_tech which = 4240}
    Command = { type = gain_tech which = 4250}
    Command = { type = gain_tech which = 4260}
    Command = { type = gain_tech which = 4270}
    Command = { type = gain_tech which = 4280}
    command = { type = gain_tech which = 5010}
    command = { type = gain_tech which = 5020}
    command = { type = gain_tech which = 5030}
    command = { type = gain_tech which = 5040}
    command = { type = gain_tech which = 5050}
    command = { type = gain_tech which = 5060}
    command = { type = gain_tech which = 5070}
    command = { type = gain_tech which = 5080}
    command = { type = gain_tech which = 5090}
    command = { type = gain_tech which = 5100}
    command = { type = gain_tech which = 5110}
    command = { type = gain_tech which = 5120}
    command = { type = gain_tech which = 5130}
    command = { type = gain_tech which = 5140}
    command = { type = gain_tech which = 5150}
    command = { type = gain_tech which = 5160}
    command = { type = gain_tech which = 5170}
    command = { type = gain_tech which = 5180}
    command = { type = gain_tech which = 5190}
    command = { type = gain_tech which = 5200}
    command = { type = gain_tech which = 5210}
    command = { type = gain_tech which = 5220}
    command = { type = gain_tech which = 5230}
    command = { type = gain_tech which = 5240}
    command = { type = gain_tech which = 5310}
    command = { type = gain_tech which = 5320}
    command = { type = gain_tech which = 5330}
    command = { type = gain_tech which = 5340}
    command = { type = gain_tech which = 5350}
    command = { type = gain_tech which = 5360}
    command = { type = gain_tech which = 5370}
    command = { type = gain_tech which = 5380}
    command = { type = gain_tech which = 5390}
    command = { type = gain_tech which = 5400}
    command = { type = gain_tech which = 5410}
    command = { type = gain_tech which = 5420}
    command = { type = gain_tech which = 5430}
    command = { type = gain_tech which = 5440}
    command = { type = gain_tech which = 5450}
    command = { type = gain_tech which = 5460}
    command = { type = gain_tech which = 5470}
    command = { type = gain_tech which = 5480}
    command = { type = gain_tech which = 5490}
    command = { type = gain_tech which = 5500}
    command = { type = gain_tech which = 5510}
    command = { type = gain_tech which = 5520}
    command = { type = gain_tech which = 5530}
    command = { type = gain_tech which = 5540}
    command = { type = gain_tech which = 5550}
    command = { type = gain_tech which = 5560}
    command = { type = gain_tech which = 5570}
    command = { type = gain_tech which = 5580}
    command = { type = gain_tech which = 5590}
    command = { type = gain_tech which = 6010}
    command = { type = gain_tech which = 6020}
    command = { type = gain_tech which = 6030}
    command = { type = gain_tech which = 6040}
    command = { type = gain_tech which = 6050}
    command = { type = gain_tech which = 6060}
    command = { type = gain_tech which = 6070}
    command = { type = gain_tech which = 6080}
    command = { type = gain_tech which = 6090}
    command = { type = gain_tech which = 6100}
    command = { type = gain_tech which = 6110}
    command = { type = gain_tech which = 6120}
    command = { type = gain_tech which = 6130}
    command = { type = gain_tech which = 6140}
    command = { type = gain_tech which = 6150}
    command = { type = gain_tech which = 6160}
    command = { type = gain_tech which = 6170}
    command = { type = gain_tech which = 6180}
    command = { type = gain_tech which = 6190}
    command = { type = gain_tech which = 6200}
    command = { type = gain_tech which = 6210}
    command = { type = gain_tech which = 6220}
    command = { type = gain_tech which = 6230}
    command = { type = gain_tech which = 6240}
    command = { type = gain_tech which = 6250}
    command = { type = gain_tech which = 6260}
    command = { type = gain_tech which = 6270}
    command = { type = gain_tech which = 6280}
    command = { type = gain_tech which = 6290}
    command = { type = gain_tech which = 6300}
    command = { type = gain_tech which = 6310}
    command = { type = gain_tech which = 6320}
    command = { type = gain_tech which = 6330}
    command = { type = gain_tech which = 6340}
    command = { type = gain_tech which = 6350}
    command = { type = gain_tech which = 6360}
    command = { type = gain_tech which = 6370}
    command = { type = gain_tech which = 7010}
    command = { type = gain_tech which = 7020}
    command = { type = gain_tech which = 7030}
    command = { type = gain_tech which = 7040}
    command = { type = gain_tech which = 7050}
    command = { type = gain_tech which = 7060}
    command = { type = gain_tech which = 7070}
    command = { type = gain_tech which = 7080}
    command = { type = gain_tech which = 7090}
    command = { type = gain_tech which = 7100}
    command = { type = gain_tech which = 7110}
    command = { type = gain_tech which = 7120}
    command = { type = gain_tech which = 7130}
    command = { type = gain_tech which = 7140}
    command = { type = gain_tech which = 7150}
    command = { type = gain_tech which = 7160}
    command = { type = gain_tech which = 7170}
    command = { type = gain_tech which = 7180}
    command = { type = gain_tech which = 7190}
    command = { type = gain_tech which = 7200}
    command = { type = gain_tech which = 7210}
    command = { type = gain_tech which = 7220}
    command = { type = gain_tech which = 7230}
    command = { type = gain_tech which = 7240}
    command = { type = gain_tech which = 7260}
    command = { type = gain_tech which = 7270}
    command = { type = gain_tech which = 7280}
    command = { type = gain_tech which = 7290}
    command = { type = gain_tech which = 8000}
    command = { type = gain_tech which = 8010}
    command = { type = gain_tech which = 8010}
    command = { type = gain_tech which = 8020}
    command = { type = gain_tech which = 8030}
    command = { type = gain_tech which = 8040}
    command = { type = gain_tech which = 8050}
    command = { type = gain_tech which = 8060}
    command = { type = gain_tech which = 8070}
    command = { type = gain_tech which = 8080}
    command = { type = gain_tech which = 8090}
    command = { type = gain_tech which = 8100}
    command = { type = gain_tech which = 8110}
    command = { type = gain_tech which = 8120}
    command = { type = gain_tech which = 8130}
    command = { type = gain_tech which = 8140}
    command = { type = gain_tech which = 8150}
    command = { type = gain_tech which = 8160}
    command = { type = gain_tech which = 8170}
    command = { type = gain_tech which = 8180}
    command = { type = gain_tech which = 8190}
    command = { type = gain_tech which = 8200}
    command = { type = gain_tech which = 8210}
    command = { type = gain_tech which = 8220}
    command = { type = gain_tech which = 8230}
    command = { type = gain_tech which = 8240}
    command = { type = gain_tech which = 8250}
    command = { type = gain_tech which = 8260}
    command = { type = gain_tech which = 8270}
    command = { type = gain_tech which = 8280}
    command = { type = gain_tech which = 8290}
    command = { type = gain_tech which = 8300}
    command = { type = gain_tech which = 8310}
    command = { type = gain_tech which = 8320}
    command = { type = gain_tech which = 8330}
    command = { type = gain_tech which = 8340}
    command = { type = gain_tech which = 8350}
    command = { type = gain_tech which = 9010}
    command = { type = gain_tech which = 9020}
    command = { type = gain_tech which = 9030}
    command = { type = gain_tech which = 9040}
    command = { type = gain_tech which = 9050}
    command = { type = gain_tech which = 9060}
    command = { type = gain_tech which = 9070}
    command = { type = gain_tech which = 9080}
    command = { type = gain_tech which = 9090}
    command = { type = gain_tech which = 9100}
    command = { type = gain_tech which = 9110}
    command = { type = gain_tech which = 9120}
    command = { type = gain_tech which = 9130}
    command = { type = gain_tech which = 9140}
    command = { type = gain_tech which = 9150}
    command = { type = gain_tech which = 9160}
    command = { type = gain_tech which = 9170}
    command = { type = gain_tech which = 9180}
    command = { type = gain_tech which = 9190}
    command = { type = gain_tech which = 9200}
    command = { type = gain_tech which = 9210}
    command = { type = gain_tech which = 9220}
    command = { type = gain_tech which = 9230}
    command = { type = gain_tech which = 9240}
    command = { type = gain_tech which = 9250}
    command = { type = gain_tech which = 9260}
    command = { type = gain_tech which = 9270}
    command = { type = gain_tech which = 9280}
    command = { type = gain_tech which = 9290}
    command = { type = gain_tech which = 9300}
    command = { type = gain_tech which = 9310}
    command = { type = gain_tech which = 9320}
    command = { type = gain_tech which = 9330}
    command = { type = gain_tech which = 9340}
    command = { type = gain_tech which = 9350}
    command = { type = gain_tech which = 9360}
    command = { type = gain_tech which = 9370}
    command = { type = gain_tech which = 9380}
    command = { type = gain_tech which = 9390}
    command = { type = gain_tech which = 9400}
    command = { type = gain_tech which = 9410}
    command = { type = gain_tech which = 9420}
    command = { type = gain_tech which = 9430}
    command = { type = gain_tech which = 9440}
    command = { type = gain_tech which = 9450}
    command = { type = gain_tech which = 9460}

        }
    }

Add the following for the techs added in doomsday


    command = { type = gain_tech which = 17010}
    command = { type = gain_tech which = 17000}
    command = { type = gain_tech which = 15500}
    command = { type = gain_tech which = 15000}
    command = { type = gain_tech which = 15010}
    command = { type = gain_tech which = 15020}
    command = { type = gain_tech which = 15030}
    command = { type = gain_tech which = 15040}
    command = { type = gain_tech which = 15050}
    command = { type = gain_tech which = 15060}
    command = { type = gain_tech which = 15070}
    command = { type = gain_tech which = 15080}
    command = { type = gain_tech which = 15100}
    command = { type = gain_tech which = 15110}
    command = { type = gain_tech which = 15120}
    command = { type = gain_tech which = 15130}
    command = { type = gain_tech which = 15140}
    command = { type = gain_tech which = 15150}
    command = { type = gain_tech which = 15160}
    command = { type = gain_tech which = 15170}
    command = { type = gain_tech which = 15180}
    command = { type = gain_tech which = 15190}
    command = { type = gain_tech which = 11000}
    command = { type = gain_tech which = 11010}
    command = { type = gain_tech which = 11020}
    command = { type = gain_tech which = 11030}
    command = { type = gain_tech which = 11040}
    command = { type = gain_tech which = 11050}
    command = { type = gain_tech which = 11060}
    command = { type = gain_tech which = 11070}
    command = { type = gain_tech which = 11080}
    command = { type = gain_tech which = 11090}
    command = { type = gain_tech which = 13000}
    command = { type = gain_tech which = 13010}
    command = { type = gain_tech which = 13020}
    command = { type = gain_tech which = 13030}
    command = { type = gain_tech which = 13040}
    command = { type = gain_tech which = 13050}
    command = { type = gain_tech which = 13060}
    command = { type = gain_tech which = 10000}
    command = { type = gain_tech which = 10010}
    command = { type = gain_tech which = 10020}
    command = { type = gain_tech which = 10030}
    command = { type = gain_tech which = 10040}
    command = { type = gain_tech which = 10050}
    command = { type = gain_tech which = 10060}
    command = { type = gain_tech which = 10070}
    command = { type = gain_tech which = 10080}
    command = { type = gain_tech which = 10090}
    command = { type = gain_tech which = 10100}
    command = { type = gain_tech which = 10110}
    command = { type = gain_tech which = 10120}
    command = { type = gain_tech which = 14000}
    command = { type = gain_tech which = 14010}
    command = { type = gain_tech which = 14020}
    command = { type = gain_tech which = 14030}
    command = { type = gain_tech which = 14040}
    command = { type = gain_tech which = 14050}
    command = { type = gain_tech which = 14060}
    command = { type = gain_tech which = 14070}
    command = { type = gain_tech which = 14080}
    command = { type = gain_tech which = 14090}
    command = { type = gain_tech which = 14100}
    command = { type = gain_tech which = 12000}
    command = { type = gain_tech which = 12010}
    command = { type = gain_tech which = 12020}
    command = { type = gain_tech which = 12030}
    command = { type = gain_tech which = 12040}
    command = { type = gain_tech which = 12050}
    command = { type = gain_tech which = 12060}
    command = { type = gain_tech which = 12100}
    command = { type = gain_tech which = 12110}
    command = { type = gain_tech which = 12120}
    command = { type = gain_tech which = 12130}
    command = { type = gain_tech which = 12140}
    command = { type = gain_tech which = 12150}
    command = { type = gain_tech which = 16000}
    command = { type = gain_tech which = 16010}
    command = { type = gain_tech which = 16020}
    command = { type = gain_tech which = 16030}
    command = { type = gain_tech which = 18000}
    command = { type = gain_tech which = 18010}

Cut production time of everything to one day. Has to be random to
reverse it. If you get the event by random, just fire it again and click
option B. Made by Haru yo koi (Fixed option B. and made option C by
Ispanecabg)

    event = {
    id = 505000
    random = yes
    style = 0

    name = "Cut Production Time"
    desc = "Cheat event"

    date = { day = 1 month = january year = 1936 }
    offset = 0

    action_a = {
    name = "CUTDOWN"
    ai_chance = 0
    command = { type = build_time which = armor when = now where = relative value = -150 }
    command = { type = build_time which = light_armor when = now where = relative value = -150 }
    command = { type = build_time which = battlecruiser when = now where = relative value = -150 }
    command = { type = build_time which = battleship when = now where = relative value = -150 }
    command = { type = build_time which = carrier when = now where = relative value = -150 }
    command = { type = build_time which = heavy_cruiser when = now where = relative value = -150 }
    command = { type = build_time which = destroyer when = now where = relative value = -150 }
    command = { type = build_time which = CAG when when = now where = relative value = -150 }
    command = { type = build_time which = infantry when = now where = relative value = -150 }
    command = { type = build_time which = CAS when = now where = relative value = -150 }
    command = { type = build_time which = bergsjaeger when = now where = relative value = -150 }
    command = { type = build_time which = cavalry when = now where = relative value = -150 }
    command = { type = build_time which = escort when = now where = relative value = -150 }
    command = { type = build_time which = flying_bomb when = now where = relative value = -150 }
    command = { type = build_time which = flying_rocket when = now where = relative value = -150 }
    command = { type = build_time which = garrison when = now where = relative value = -150 }
    command = { type = build_time which = interceptor when = now where = relative value = -150 }
    command = { type = build_time which = marine when = now where = relative value = -150 }
    command = { type = build_time which = mechanized when = now where = relative value = -150 }
    command = { type = build_time which = motorized when = now where = relative value = -150 }
    command = { type = build_time which = naval_bomber when = now where = relative value = -150 }
    command = { type = build_time which = paratrooper when = now where = relative value = -150 }
    command = { type = build_time which = strategic_bomber when = now where = relative value = -150 }
    command = { type = build_time which = tactical_bomber when = now where = relative value = -150 }
    command = { type = build_time which = transport when = now where = relative value = -150 }
    command = { type = build_time which = transport_plane when = now where = relative value = -150 }
    command = { type = build_time which = engineer when = now where = relative value = -150 }
    command = { type = build_time which = police when = now where = relative value = -150 }
    command = { type = build_time which = anti_tank when = now where = relative value = -150 }
    command = { type = build_time which = battleship when = now where = relative value = -150 }
    command = { type = build_time which = hq now where when = now where = relative value = -150 }
    command = { type = build_time which = sp_artillery when = now where = relative value = -150 }
    command = { type = build_time which = sp_rct_artillery when = now where = relative value = -150 }
    }
        action_b = {
            name = "Reverse."
                            ai_chance = 0
            command = { type = build_time which = armor when = now where = relative value = 150 }
    command = { type = build_time which = light_armor when = now where = relative value = 150 }
    command = { type = build_time which = battlecruiser when = now where = relative value = 150 }
    command = { type = build_time which = battleship when = now where = relative value = 150 }
    command = { type = build_time which = carrier when = now where = relative value = 150 }
    command = { type = build_time which = heavy_cruiser when = now where = relative value = 150 }
    command = { type = build_time which = destroyer when = now where = relative value = 150 }
    command = { type = build_time which = CAG when when = now where = relative value = 150 }
    command = { type = build_time which = infantry when = now where = relative value = 150 }
    command = { type = build_time which = CAS when = now where = relative value = 150 }
    command = { type = build_time which = bergsjaeger when = now where = relative value = 150 }
    command = { type = build_time which = cavalry when = now where = relative value = 150 }
    command = { type = build_time which = escort when = now where = relative value = 150 }
    command = { type = build_time which = flying_bomb when = now where = relative value = 150 }
    command = { type = build_time which = flying_rocket when = now where = relative value = 150 }
    command = { type = build_time which = garrison when = now where = relative value = 150 }
    command = { type = build_time which = interceptor when = now where = relative value = 150 }
    command = { type = build_time which = marine when = now where = relative value = 150 }
    command = { type = build_time which = mechanized when = now where = relative value = 150 }
    command = { type = build_time which = motorized when = now where = relative value = 150 }
    command = { type = build_time which = naval_bomber when = now where = relative value = 150 }
    command = { type = build_time which = paratrooper when = now where = relative value = 150 }
    command = { type = build_time which = strategic_bomber when = now where = relative value = 150 }
    command = { type = build_time which = tactical_bomber when = now where = relative value = 150 }
    command = { type = build_time which = transport when = now where = relative value = 150 }
    command = { type = build_time which = transport_plane when = now where = relative value = 150 }
    command = { type = build_time which = engineer when = now where = relative value = 150 }
    command = { type = build_time which = police when = now where = relative value = 150 }
    command = { type = build_time which = anti_tank when = now where = relative value = 150 }
    command = { type = build_time which = battleship when = now where = relative value = 150 }
    command = { type = build_time which = hq now where when = now where = relative value = 150 }
    command = { type = build_time which = sp_artillery when = now where = relative value = 150 }
    command = { type = build_time which = sp_rct_artillery when = now where = relative value = 150 }
        }
        action_c = {
            name = "No need of change"
            ai_chance = 100
            command = { }
        }
    }
